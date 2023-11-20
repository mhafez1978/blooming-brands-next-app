import React from "react";
import { Nunito } from "next/font/google";
import Hero2 from "@/components/ui/Hero02";
import Hero1 from "@/components/ui/Hero";
import About from "@/components/content/About";
import TechStack from "@/components/ui/TechStack";
import OurProcess from "@/components/ui/OurProcess";
import Services from "@/components/ui/Services";
import Portfolio from "@/components/ui/Portfolio";
import CTA from "@/components/ui/CTA01";
import HeaderCta from "@/components/ui/HeaderCta";

const nunito = Nunito({ subsets: ["latin"] });

const homepage: React.FC = async () => {
  return (
    <>
      <HeaderCta />
      <OurProcess />
      <TechStack />
      <Services />
      <About />
      <CTA />
    </>
  );
};

export default homepage;
