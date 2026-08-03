import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Areas from "@/components/Areas";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Strengths from "@/components/Strengths";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <Stats />
      <About />
      <Areas />
      <TechStack />
      <Projects />
      <Timeline />
      <Strengths />
      <GitHubSection />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
