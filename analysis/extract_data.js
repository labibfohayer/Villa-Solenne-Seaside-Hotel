const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://webild-mcp-components.vercel.app/templates/seaside-hotel';
const OUT_DIR = '/home/labib-fohayer/.gemini/antigravity/scratch/seaside-hotel';
const REF_DIR = path.join(OUT_DIR, 'reference');
const ASSETS_DIR = path.join(REF_DIR, 'assets');

if (!fs.existsSync(REF_DIR)) fs.mkdirSync(REF_DIR, { recursive: true });
if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });

async function extract() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle2', timeout: 45000 });
  await new Promise(r => setTimeout(r, 2000));

  const extraction = await page.evaluate(() => {
    function getDetails(el) {
      const cs = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return {
        tag: el.tagName.toLowerCase(),
        id: el.id || undefined,
        className: typeof el.className === 'string' ? el.className : undefined,
        text: el.children.length === 0 ? (el.innerText || el.textContent || '').trim() : undefined,
        rect: { top: rect.top + window.scrollY, left: rect.left, width: rect.width, height: rect.height },
        styles: {
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          textTransform: cs.textTransform,
          color: cs.color,
          backgroundColor: cs.backgroundColor,
          border: cs.border,
          borderRadius: cs.borderRadius,
          padding: cs.padding,
          margin: cs.margin,
          gap: cs.gap,
          display: cs.display,
          flexDirection: cs.flexDirection,
          justifyContent: cs.justifyContent,
          alignItems: cs.alignItems,
          boxShadow: cs.boxShadow,
          opacity: cs.opacity,
          backdropFilter: cs.backdropFilter,
          transition: cs.transition
        }
      };
    }

    // Sections
    const sectionElements = Array.from(document.querySelectorAll('section, header, footer, nav, [data-section]'));
    const sections = sectionElements.map(sec => {
      const rect = sec.getBoundingClientRect();
      return {
        tag: sec.tagName.toLowerCase(),
        id: sec.id,
        className: typeof sec.className === 'string' ? sec.className : undefined,
        rect: { width: rect.width, height: rect.height, top: rect.top + window.scrollY },
        headings: Array.from(sec.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
          tag: h.tagName,
          text: (h.innerText || h.textContent || '').trim(),
          styles: getDetails(h).styles
        })),
        textSnippet: (sec.innerText || sec.textContent || '').slice(0, 500)
      };
    });

    // Images
    const images = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
      currentSrc: img.currentSrc,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      className: typeof img.className === 'string' ? img.className : undefined,
      rect: { width: img.clientWidth, height: img.clientHeight }
    }));

    // Buttons and links
    const interactives = Array.from(document.querySelectorAll('button, a, input, select')).map(el => {
      const rect = el.getBoundingClientRect();
      return {
        type: el.tagName.toLowerCase(),
        text: (el.innerText || el.textContent || '').trim(),
        href: el.href,
        id: el.id,
        className: typeof el.className === 'string' ? el.className : undefined,
        ariaLabel: el.getAttribute('aria-label'),
        rect: { width: rect.width, height: rect.height },
        styles: getDetails(el).styles
      };
    });

    // Color tokens & CSS variables
    const styles = window.getComputedStyle(document.documentElement);
    const cssVars = {};
    for (let i = 0; i < styles.length; i++) {
      const prop = styles[i];
      if (prop.startsWith('--')) {
        cssVars[prop] = styles.getPropertyValue(prop).trim();
      }
    }

    return {
      title: document.title,
      sections,
      images,
      interactives,
      cssVars,
      fullHtml: document.documentElement.outerHTML
    };
  });

  fs.writeFileSync(path.join(REF_DIR, 'extraction.json'), JSON.stringify(extraction, null, 2));
  fs.writeFileSync(path.join(REF_DIR, 'page_rendered.html'), extraction.fullHtml);
  console.log('Extraction JSON and rendered HTML saved.');

  // Download unique images
  const uniqueUrls = [...new Set(extraction.images.map(img => img.src).filter(Boolean))];
  console.log(`Downloading ${uniqueUrls.length} images...`);
  for (let i = 0; i < uniqueUrls.length; i++) {
    const imgUrl = uniqueUrls[i];
    try {
      const parsed = new URL(imgUrl);
      const ext = path.extname(parsed.pathname) || '.jpg';
      const cleanName = `img_${i}_${path.basename(parsed.pathname, ext)}${ext}`;
      const dest = path.join(ASSETS_DIR, cleanName);
      
      await new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(imgUrl, res => {
          res.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', err => { fs.unlink(dest, () => {}); reject(err); });
      });
      console.log(`Downloaded image ${i+1}/${uniqueUrls.length}: ${cleanName}`);
    } catch (e) {
      console.error(`Failed to download ${imgUrl}:`, e.message);
    }
  }

  await browser.close();
  console.log('Extraction complete!');
}

extract().catch(console.error);
