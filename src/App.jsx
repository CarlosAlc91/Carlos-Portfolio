import "./App.css";
import AboutMe from "./components/AboutMe";
import ModalMenu from "./components/ModalMenu";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <h1>I need to finish this portfolio</h1>
      <nav>
        <ModalMenu />
        <AboutMe />
        {/* <Projects />
        <Contact /> */}
      </nav>
    </main>
  );
}

export default App;
