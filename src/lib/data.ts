export interface NavItem {
  name: string;
  href: string;
}

export interface VillaSpec {
  label: string;
  value: string;
}

export interface VillaItem {
  name: string;
  price: string;
  period: string;
  description: string;
  specs: VillaSpec[];
  imageSrc: string;
  imageAlt: string;
  cta: {
    text: string;
    href: string;
  };
}

export interface DestinationItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface GalleryItem {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

export interface FooterColumn {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
}

export const siteData = {
  brand: "Villa Solenne",
  nav: {
    brand: "Villa Solenne",
    cta: {
      text: "Book a villa",
      href: "#footer",
    },
    navItems: [
      { name: "Villas", href: "#pricing" },
      { name: "Getting Here", href: "#process" },
      { name: "The Island", href: "#gallery" },
      { name: "Contact", href: "#footer" },
    ],
  },
  hero: {
    title: "Villa Solenne",
    script: "Mallorca",
    labelLeft: "Four villas",
    labelRight: "one quiet hill",
    marquee: ["Own pool", "Olive hills", "Sea air"],
    imageSrc: "/images/luxury-villa-arches-pool-1600.webp",
    imageAlt: "Stone villa with arched loggia, roses and striped loungers by the pool",
    cta: {
      text: "Book a villa",
      href: "#footer",
    },
  },
  about: {
    title: "Above the cove",
    label: "Four villas in the olive hills of Mallorca",
    placeTitle: "Santanyí",
    description:
      "Four modern villas on a quiet hill above Cala s'Almunia, ten minutes from the market town of Santanyí, with pine woods and the sea on every side.",
    note: "Your own house, not a hotel",
    items: [
      {
        imageSrc: "/images/beautiful-aerial-view-cala-s-almunia-1600.webp",
        imageAlt: "Turquoise cove below pine woods and white houses",
      },
      {
        imageSrc: "/images/closeup-shot-growing-trees-field-sunlight-1600.webp",
        imageAlt: "Old olive trunks in a grove of long grass",
      },
    ],
  },
  testimonial: {
    imageSrc: "/images/santorini-garden-1600.webp",
    imageAlt: "Linen sofa on a terrace with palms and bougainvillea above white houses",
    items: [
      {
        quote: "We had the pool, the olive trees and the sea to ourselves. It never felt like a hotel.",
        name: "Clara Weiss",
        role: "Guest from Vienna",
      },
      {
        quote: "Breakfast on the terrace, a swim in the cove, dinner under the olives. We did nothing else.",
        name: "Tom and Anna Reed",
        role: "Guests from London",
      },
    ],
  },
  statement: {
    label: "The villas",
    title: "Four modern villas in the olive hills, each with its own pool, terrace and view of the sea",
    description:
      "White walls, local stone and timber, built low into the hill so every room opens onto the garden and the light.",
  },
  process: {
    aside: "From Solenne",
    items: [
      {
        title: "The cove",
        description: "5 min",
        imageSrc: "/images/aegean-cove-drone-1600.webp",
        imageAlt: "Clear blue cove between pine-covered rocks seen from above",
      },
      {
        title: "The harbour",
        description: "10 min",
        imageSrc: "/images/ibiza-coast-boats-1600.webp",
        imageAlt: "Boats anchored along a sunny rocky coast",
      },
      {
        title: "The salt pans",
        description: "20 min",
        imageSrc: "/images/konnos-bay-cape-1600.webp",
        imageAlt: "Turquoise bay below a pine-covered cape",
      },
      {
        title: "The coast path",
        description: "25 min",
        imageSrc: "/images/aegean-coast-path-drone-1600.webp",
        imageAlt: "Clear water along a rocky shore with pines, seen from above",
      },
    ],
  },
  pricing: {
    title: "The four villas",
    script: "stay",
    items: [
      {
        name: "Olive Villa",
        price: "€690",
        period: "per night",
        description: "Two bedrooms in the olive grove, a plunge pool and a shaded dining terrace.",
        specs: [
          { label: "Guests", value: "4" },
          { label: "Size", value: "120 m2" },
          { label: "Pool", value: "8 m" },
        ],
        imageSrc: "/images/potted-plant-bed-1600.webp",
        imageAlt: "Linen bed by a bright window with a potted olive",
        cta: {
          text: "Book this villa",
          href: "#footer",
        },
      },
      {
        name: "Pine Villa",
        price: "€840",
        period: "per night",
        description: "Three bedrooms under the pines, a long pool and a roof terrace for sunset.",
        specs: [
          { label: "Guests", value: "6" },
          { label: "Size", value: "180 m2" },
          { label: "Pool", value: "12 m" },
        ],
        imageSrc: "/images/luxury-modern-spa-exterior-architecture-1600.webp",
        imageAlt: "White built-in sofa under a slatted pergola",
        cta: {
          text: "Book this villa",
          href: "#footer",
        },
      },
      {
        name: "Sea Villa",
        price: "€1,150",
        period: "per night",
        description: "Our largest villa, with a stone pool edge that looks straight down to the cove.",
        specs: [
          { label: "Guests", value: "8" },
          { label: "Size", value: "240 m2" },
          { label: "Pool", value: "16 m" },
        ],
        imageSrc: "/images/outdoor-swimming-pool-with-umbrella-chair-1600.webp",
        imageAlt: "White daybed by a still pool against a stone wall",
        cta: {
          text: "Book this villa",
          href: "#footer",
        },
      },
    ],
  },
  gallery: {
    word: "Mallorca",
    quote: "We built low into the hill and kept every olive tree we found.",
    credit: "Marta Roig, architect of the villas",
    imageSrc: "/images/woman-enjoying-book-while-traveling-1600.webp",
    imageAlt: "Guest reading under a timber pergola on a white terrace",
    items: [
      {
        title: "The timber screens",
        imageSrc: "/images/trendy-modern-design-twolevel-apartment-with-1600.webp",
        imageAlt: "White render and timber louvres among palms",
      },
      {
        title: "The long table",
        imageSrc: "/images/arrangement-table-seats-new-year-s-1600.webp",
        imageAlt: "Dinner table set with candles under an olive tree",
      },
      {
        title: "Afternoon light",
        imageSrc: "/images/window-shadow-bedroom-wall-1600.webp",
        imageAlt: "Window shadows on a warm bedroom wall",
      },
      {
        title: "The olive terrace",
        imageSrc: "/images/olive-trees-1600.webp",
        imageAlt: "Olive branches against a sandstone wall",
      },
    ],
  },
  cta: {
    title: "A villa of your own",
    script: "Mallorca",
    description: "Four villas, open April to October",
    imageSrc: "/images/umbrella-chair-around-swimming-pool-neary-1600.webp",
    imageAlt: "Lounger by the pool steps against a sunlit wall",
    primaryButton: {
      text: "Book a villa",
      href: "#footer",
    },
    secondaryButton: {
      text: "Call +34 971 64 20 18",
      href: "tel:+34971642018",
    },
  },
  footer: {
    brand: "Villa Solenne",
    phone: "+34 971 64 20 18",
    email: "stay@villasolenne.com",
    address: ["Camí de s'Almunia 7", "07650 Santanyí, Mallorca"],
    columns: [
      {
        title: "Stay",
        links: [
          { text: "Villas", href: "#pricing" },
          { text: "Getting here", href: "#process" },
          { text: "The island", href: "#gallery" },
        ],
      },
      {
        title: "Visit",
        links: [
          { text: "Getting here", href: "#process" },
          { text: "Gift cards", href: "#footer" },
          { text: "Private events", href: "#footer" },
        ],
      },
      {
        title: "Follow",
        links: [
          { text: "Instagram", href: "#" },
          { text: "Newsletter", href: "#" },
        ],
      },
    ],
    legal: "Villa Solenne 2026. All rights reserved.",
    toTopText: "To top",
  },
};
