import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
