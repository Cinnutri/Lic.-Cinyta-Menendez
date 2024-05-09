"use client";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Pricing />
      </div>
      <div>
        <Footer />
      </div>
      {/*       
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer /> */}
    </div>
  );
}
