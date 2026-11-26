import type { Metadata, Viewport } from "next";
import { Barlow, Jost } from "next/font/google";
import "./globals.css";

const display = Jost({ variable: "--font-display", subsets: ["latin"], weight: ["300", "400", "500"] });
const body = Barlow({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Acquatica Park Milano · Il parco acquatico a Quinto Romano",
  description:
    "17 attrazioni su oltre 100.000 m² a Milano ovest: Kamikaze da 19 m, Fiume Lento da 340 m, area bimbi. Biglietti online da 23 €, aperto 10–19.",
  robots: { index: false, follow: false }, // anteprima: non indicizzare
  openGraph: {
    title: "Acquatica Park Milano",
    description: "Il parco acquatico di Milano, a un autobus dalla M1.",
    locale: "it_IT",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0A5482" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
