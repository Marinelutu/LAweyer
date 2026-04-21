import { ScrollProvider } from "@/app/ScrollProvider";
import { ContactCTASection } from "@/sections/ContactCTASection";
import { FeaturedCaseSection } from "@/sections/FeaturedCaseSection";
import { FooterSection } from "@/sections/FooterSection";
import { HeroSection } from "@/sections/HeroSection";
import { IntroSection } from "@/sections/IntroSection";
import { PracticeAreasSection } from "@/sections/PracticeAreasSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { TypographyStatementSection } from "@/sections/TypographyStatementSection";

export default function HomePage() {
  return (
    <ScrollProvider>
      <main>
        <HeroSection />
        <IntroSection />
        <PracticeAreasSection />
        <FeaturedCaseSection />
        <TypographyStatementSection />
        <TestimonialsSection />
        <ContactCTASection />
      </main>
      <FooterSection />
    </ScrollProvider>
  );
}
