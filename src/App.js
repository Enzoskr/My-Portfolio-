import { Navbar } from "./components/Navbar/Navbar";
import { Contact } from "./components/Contact/Contact";
import Habilities from "./components/Habilities/Habilities";
import Layout from "./components/Layout/Layout";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />

        <Projects />
        <AboutMe />
        <Habilities />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
