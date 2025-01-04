import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaEnvelope,
  FaDownload,
  FaBars,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const navLinks = (
    <>
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="active"
        className="cursor-pointer flex mb-2 md:mb-0 items-center px-2 font-semibold"
      >
        <FaHome className="mr-2 text-orange-500" /> Home
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="active"
        className="cursor-pointer flex mb-2 md:mb-0 items-center px-2 font-semibold"
      >
        <FaUserAlt className="mr-2 text-orange-500" /> About
      </Link>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="active"
        className="cursor-pointer flex mb-2 md:mb-0 items-center px-2 font-semibold"
      >
        <FaTools className="mr-2 text-orange-500" /> Skills
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="active"
        className="cursor-pointer flex mb-2 md:mb-0 items-center px-2 font-semibold"
      >
        <FaProjectDiagram className="mr-2 text-orange-500" /> Projects
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="active"
        className="cursor-pointer flex mb-2 md:mb-0 items-center px-2 font-semibold"
      >
        <FaEnvelope className="mr-2 text-orange-500" /> Contact
      </Link>
    </>
  );

  const resumeBtn = (
    <a
      href="https://drive.google.com/file/d/1WBLo9EmBspUE7fUw_tiOIPB-6Q4qLs6K/view?usp=sharing"
      target="_blank"
      className="bg-orange-500 shadow-lg text-white py-2 px-4 font-semibold rounded-md hover:bg-emerald-700 transition duration-200 flex items-center"
    >
      <FaDownload className="mr-2" /> Resume
    </a>
  );

  return (
    <div className="navbar bg-cyan-900 bg-opacity-60 text-accent-content backdrop-blur-md sticky top-0 z-50 rounded-2xl shadow-2xl px-3">
      <div className="navbar-start items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" px-2 lg:hidden">
            <FaBars className="h-5 w-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content space-y-2 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <p className="pl-3 font-sans text-xl font-bold underline">
          <span className="text-orange-500">Ashraf</span> Azad
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-2 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">{resumeBtn}</div>
    </div>
  );
}

export default Navbar;
