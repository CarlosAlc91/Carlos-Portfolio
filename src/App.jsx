import "./App.css";
import Navbar from "./components/layout/Navbar";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden overflow-y-hidden bg-bg-main text-white">
      {/* <HeaderNavbar /> */}
      <Navbar />

      <div>
        <AboutMe />
        <Technologies />
        <Projects />
        <Contact />
      </div>
      <WhatsAppButton />
    </main>
  );
}

export default App;
