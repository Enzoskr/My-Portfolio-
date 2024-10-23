import Navbar from "./components/Navbar/Navbar";
import Habilities from "./components/Habilities/Habilities";
import Layout from "./components/Layout/Layout";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <h2>Proyectos</h2>
        <Projects />
        <h2>Sobre mí</h2>
        <AboutMe />
        <h2>Habilidades</h2>
        <Habilities />
      </Layout>
      <Contact />
    </>
  );
}

export default App;
