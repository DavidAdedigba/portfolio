
import IntroSection from "../components/IntroSection";
import HighlightSection from "../components/HighlightSection";
import AboutSection from "../components/AboutSection";
import WorkSection from "../components/WorkSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
    return (
        <main>
            <IntroSection />
            <HighlightSection />
            <AboutSection />
            <WorkSection />
            <ContactSection />
        </main>
    )
}