import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import aLogo from "../assets/a-logo-1.png";

const Footer = () => {
  return (
    <footer className="footer footer-center shadow-lg rounded-lg bg-gradient-to-r from-[#020024] via-[#00d4ff] to-[#ff9900c2] text-black p-10">
      <aside>
        <img
          src={aLogo}
          alt="Ashraf Azad Web Development"
          className=" w-28 h-28 "
        />
        <p className="font-bold">
          Ashraf Azad
          <br />
          Providing Reliable Web Tech Solutions.
        </p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/ashrafuzzaman-azad-web-student/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="fill-current" size={24} />
          </a>
          <a
            href="https://github.com/aka-azad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="fill-current" size={24} />
          </a>
          <a
            href="https://www.facebook.com/ashraf.azad.86"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="fill-current" size={24} />
          </a>
          <a
            href="mailto:ashrafazad86@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="fill-current" size={24} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
