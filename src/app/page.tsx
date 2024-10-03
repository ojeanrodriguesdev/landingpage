import Footer from "./components/layout/Footer";
import CTASection from "./components/view/CTASection";
import CTASectionTwo from "./components/view/CTASectionTwo";
import Faq from "./components/view/Faq";
import FeatureOne from "./components/view/FeatureOne";
import HeroSection from "./components/view/HeroSection";
import Testimonials from "./components/view/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CTASection />
      <FeatureOne />
      <CTASectionTwo />
      <Testimonials />
      <Faq />

      <Footer />
    </main>
  );
}
