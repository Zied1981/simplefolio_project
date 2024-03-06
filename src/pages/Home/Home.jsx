import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/skills";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <section className="content">
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </section>
  );
};

export default Home;
