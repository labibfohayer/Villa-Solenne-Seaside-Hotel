import SmoothScroll from "@/components/SmoothScroll";
import NavbarSealCorner from "@/components/NavbarSealCorner";
import HeroArchPoster from "@/components/HeroArchPoster";
import AboutArchCurve from "@/components/AboutArchCurve";
import TestimonialPhotoQuote from "@/components/TestimonialPhotoQuote";
import StatementPlusConcept from "@/components/StatementPlusConcept";
import ProcessRouteLine from "@/components/ProcessRouteLine";
import PricingFramedSlider from "@/components/PricingFramedSlider";
import GalleryWindowMerge from "@/components/GalleryWindowMerge";
import CtaPosterPhoto from "@/components/CtaPosterPhoto";
import FooterPlumPhone from "@/components/FooterPlumPhone";
import { siteData } from "@/lib/data";

export default function Home() {
  return (
    <main
      data-button="outline"
      data-card="frame"
      data-pattern="none"
      className="relative isolate overflow-clip bg-background text-foreground"
    >
      <SmoothScroll />
      <div className="kit-pattern" aria-hidden="true" />

      {/* Navigation */}
      <NavbarSealCorner
        brand={siteData.nav.brand}
        cta={siteData.nav.cta}
        navItems={siteData.nav.navItems}
      />

      {/* 1. Hero Section */}
      <div id="hero" data-section="hero" data-scene="true" className="contents">
        <HeroArchPoster {...siteData.hero} />
      </div>

      {/* 2. About Section */}
      <div id="about" data-section="about">
        <AboutArchCurve {...siteData.about} />
      </div>

      {/* 3. Testimonials */}
      <div id="testimonial" data-section="testimonial" data-scene="true">
        <TestimonialPhotoQuote {...siteData.testimonial} />
      </div>

      {/* 4. Statement */}
      <div id="statement" data-section="statement">
        <StatementPlusConcept {...siteData.statement} />
      </div>

      {/* 5. Process / Getting Here */}
      <div id="process" data-section="process">
        <ProcessRouteLine {...siteData.process} />
      </div>

      {/* 6. Pricing / The Four Villas */}
      <div id="pricing" data-section="pricing">
        <PricingFramedSlider {...siteData.pricing} />
      </div>

      {/* 7. Gallery / The Island */}
      <div id="gallery" data-section="gallery" data-scene="true" data-gallery="true">
        <GalleryWindowMerge {...siteData.gallery} />
      </div>

      {/* 8. Closing CTA Poster */}
      <div id="cta" data-section="cta" data-scene="true">
        <CtaPosterPhoto {...siteData.cta} />
      </div>

      {/* 9. Footer & Phone Portal */}
      <div id="footer" data-section="footer">
        <FooterPlumPhone {...siteData.footer} />
      </div>
    </main>
  );
}
