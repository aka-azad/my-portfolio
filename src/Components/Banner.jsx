import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#020024] via-[#252574] to-[#00d4ff]">
      <div
        id="home"
        className="grid grid-cols-1 max-w-screen-lg mx-auto sm:grid-cols-2 gap-4 px-4 pt-4  "
      >
        <div className="flex flex-col justify-center text-white items-center sm:items-start text-center sm:text-left relative">
          <h2 className="text-4xl font-bold mb-2">
            Frontend <br />
            <span className="special-text text-7xl font-charm">
              Web Developer
            </span>
          </h2>
          <p className="text-xl mt-1 mb-4">
            Searching and Learning new things.
          </p>
          <div className="flex gap-5 items-center">
            <div className="hidden sm:flex justify-center sm:justify-start space-x-4">
              <a
                href="https://web.facebook.com/ashraf.azad.86"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange700 transition duration-200"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://github.com/aka-azad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange700 transition duration-200"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashrafuzzaman-azad-web-student"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange700 transition duration-200"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1UZ-5oZp4CrMeRzGFFcx8kRjy6EreJoRJ/view?usp=sharing"
                target="_blank"
                className="bg-orange-500 shadow-lg text-white py-2 px-4 font-semibold rounded-md hover:bg-emerald-700 transition duration-200 flex items-center"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end relative">
          <img
            src="https://i.ibb.co.com/S4z8rTpN/Azad-Photoroom.png"
            alt="Ashraf Azad"
            className=" h-auto  "
          />
          <div className="flex sm:hidden justify-center absolute bottom-4 space-x-4">
            <a
              href="https://web.facebook.com/ashraf.azad.86"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange700 transition duration-200"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://github.com/aka-azad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange700 transition duration-200"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashrafuzzaman-azad-web-student"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange700 transition duration-200"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
