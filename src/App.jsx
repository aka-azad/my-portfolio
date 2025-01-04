import AboutMe from "./Components/AboutMe";
import Banner from "./Components/Banner";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import MySkills from "./Components/MySkills";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="font-poppins max-w-screen-lg mx-auto">
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
