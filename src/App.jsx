import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ModalMenu from "./components/ModalMenu";
import HeaderNavbar from "./components/layout/HeaderNavbar";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <h1>I need to finish this portfolio</h1>
      <nav>
        <AboutMe />
        {/* <Projects />
        <Contact /> */}
      </nav>
    </main>
  );
}

export default App;
