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
        <Projects />
        <AboutMe />

        <Habilities />
      </Layout>
      <Contact />
    </>
  );
}

export default App;
