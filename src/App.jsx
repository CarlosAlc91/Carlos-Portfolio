import "./App.css";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <main className="min-h-full">
      <div className="w-full bg-bg-main text-white">
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;
