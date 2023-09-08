import "./App.css";
import HeaderNavbar from "./components/layout/HeaderNavbar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Studies from "./pages/Studies";

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden overflow-y-hidden bg-bg-main text-white">
      <HeaderNavbar />
      <div>
        <AboutMe />
        <Studies />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;
