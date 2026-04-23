import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <SectionDivider bg="#F8F7F4" color="#C9A84C" />
      <TeamSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
