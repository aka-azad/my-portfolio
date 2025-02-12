import AboutMe from "./Components/AboutMe";
import Banner from "./Components/Banner";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import MySkills from "./Components/MySkills";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="font-poppins bg-gradient-to-r from-[#020024] via-[#252574] to-[#00d4ff] mx-auto">
      <Navbar />
      <Banner />
      <AboutMe />
      <MySkills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
