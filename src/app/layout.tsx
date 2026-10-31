
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shrotihost.in"),

  title: {
    default: "ShrotiHost | Hosting, Domains & Web Solutions",
    template: "%s | ShrotiHost",
  },

  description:
    "Explore web hosting, domain registration, reseller hosting, VPS hosting and web development services from ShrotiHost.",

  applicationName: "ShrotiHost",

  openGraph: {
    title: "ShrotiHost | Hosting, Domains & Web Solutions",
    description:
      "Discover hosting, domains and digital solutions for your online presence with ShrotiHost.",
    url: "https://shrotihost.in",
    siteName: "ShrotiHost",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ShrotiHost | Hosting, Domains & Web Solutions",
    description:
      "Explore hosting, domains and web development solutions from ShrotiHost.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
