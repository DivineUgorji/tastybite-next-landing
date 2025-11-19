"use client";
import Image from "next/image";
import FAQs from "@/components/FAQs/FAQs";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Main from "@/components/sections/Main";
import Menus from "@/components/sections/Menus/Menus";
import MobileMenu from "@/components/sections/MobileMenu/MobileMenu";
import Navigation from "@/components/sections/Navigation";
import Page from "@/components/sections/Page";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import WhyUs from "@/components/sections/WhyUs";
import { MobileMenuContextProvider } from "@/Contexts/MobileMenuContext";

export default function Home() {
  return (
    <MobileMenuContextProvider>
      <Page>
        <Header>
          <Navigation />
          <Hero />
        </Header>

        <Main>
          <Contact />
          <Menus />
          <WhyUs />
          <Testimonials />
          <FAQs />
        </Main>
        <Footer />
        <MobileMenu />
      </Page>
    </MobileMenuContextProvider>
  );
}
