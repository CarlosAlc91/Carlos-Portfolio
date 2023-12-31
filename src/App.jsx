import "./App.css";
import Hero from "./components/layout/Hero";
import ParticlesBackground from "./components/layout/ParticlesBackground";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Studies from "./pages/Studies";
import Technologies from "./pages/Technologies";

function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden dark:bg-container overflow-y-hidden">
      <Hero />
      <AboutMe />
      <Studies />
      <Technologies />
      <Projects />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}

export default App;
