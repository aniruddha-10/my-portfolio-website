import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <NavBar/>
      <Home />
      <About />
      <ProjectsSection/>
      <Skills/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;