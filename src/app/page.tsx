import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorksSection from "@/components/WorksSection";
import AwardsSection from "@/components/AwardsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ScrollReveal>
          <WorksSection />
        </ScrollReveal>
        <ScrollReveal>
          <AwardsSection />
        </ScrollReveal>
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
