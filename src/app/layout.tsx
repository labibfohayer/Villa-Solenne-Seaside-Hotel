import type { Metadata } from "next";
import { Instrument_Serif, Archivo, Pinyon_Script } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-heading-variable",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-body-variable",
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script-variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Villa Solenne — Four Villas Above the Cove, Santanyí",
  description:
    "Four modern villas on a quiet hill above Cala s'Almunia, ten minutes from the market town of Santanyí, Mallorca.",
  keywords: [
    "Villa Solenne",
    "Santanyi villa",
    "Mallorca luxury hotel",
    "Cala s'Almunia",
    "holiday rental Mallorca",
  ],
  authors: [{ name: "Villa Solenne" }],
  openGraph: {
    title: "Villa Solenne — Four Villas Above the Cove, Santanyí",
    description:
      "Four modern villas on a quiet hill above Cala s'Almunia, ten minutes from the market town of Santanyí, with pine woods and the sea on every side.",
    url: "https://www.webild.io/templates/seaside-hotel",
    siteName: "Villa Solenne",
    images: [
      {
        url: "/images/luxury-villa-arches-pool-1600.webp",
        width: 1600,
        height: 1067,
        alt: "Villa Solenne luxury villa with pool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${archivo.variable} ${pinyonScript.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..700&family=Instrument+Serif:ital@0;1&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
