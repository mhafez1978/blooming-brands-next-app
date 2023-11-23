import "reflect-metadata";
import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Providers from "@/components/utilities/provider";
import { Advent_Pro } from "next/font/google";
import { Agdasima } from "next/font/google";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

const adventPro = Advent_Pro({ subsets: ["latin"] });

const agdasima = Agdasima({ subsets: ["latin"], weight: "400" });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "300", "400", "500", "700", "900"],
});
// main meta data
export const metadata: Metadata = {
  title: "Blooming Brands",
  description: "Web apps and online marketing for small businesses",
  applicationName: "Blooming Brands",
  authors: { name: "Mohamed Hafez", url: "https://beingmohamedhafez.com" },
  creator: "Mohamed Hafez",
  publisher: "Mohamed Hafez",
  keywords: ["web design", "web development", "online marketing"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white dark:bg-zinc-900`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
