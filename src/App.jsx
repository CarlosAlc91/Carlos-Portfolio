import "./App.css";
import HeaderNavbar from "./components/layout/HeaderNavbar";
import Navbar from "./components/layout/Navbar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden overflow-y-hidden bg-bg-main text-white">
      {/* <HeaderNavbar /> */}
      <div>
        <Navbar />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;
