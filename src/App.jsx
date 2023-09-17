import "./App.css";
import HeaderNavbar from "./components/layout/HeaderNavbar";
import Hero from "./components/layout/Hero";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import { Router, Route } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden overflow-y-hidden bg-bg-main text-white">
      <HeaderNavbar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}

export default App;
