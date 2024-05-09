"use client";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
