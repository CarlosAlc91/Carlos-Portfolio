import "./App.css";
import Navbar from "./components/layout/Navbar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <main className="min-h-screen bg-bg-main">
      <Navbar />
      <div className="w-full bg-bg-main text-white">
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;
