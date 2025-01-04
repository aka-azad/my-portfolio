import { useState, useEffect } from "react";
import backgroundImage from "../assets/bg-image.jpg";

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 640);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 640);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="about"
      className="bg-cover bg-center bg-fixed p-10 mt-4 text-white rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-lg mb-2">
          Hello! My name is <strong>Ashrafuzzaman Azad</strong>. I was born in
          Chandpur, Bangladesh, and my educational journey took me to different
          parts of the country. I completed my schooling in Sylhet and went to
          Dhaka Polytechnic Institute for college in Dhaka. There I got Diploma
          in Civil Engineering.
        </p>
        {(showMore || isLargeScreen) && (
          <>
            <p className="text-lg mb-2">
              My career initially began in civil engineering. However, due to
              health reasons, I had to make a change. I decided to dive into the
              world of web development, and it turned out to be a rewarding
              journey. I have learned a lot along the way and am now a
              proficient MERN stack web developer.
            </p>
            <p className="text-lg mb-2">
              I am passionate about continuously searching for and learning new
              things. With my skills and experience, I am now looking for
              exciting opportunities and placements in web development.
            </p>
            <p className="text-lg font-bold text-[#eeb226] mt-4">
              Let&apos;s connect and create something amazing together!
            </p>
          </>
        )}
        <div className="block sm:hidden text-center w-fit mx-auto mt-4">
          <button
            onClick={handleToggle}
            className="bg-orange-500 shadow-lg text-white py-2 px-4 font-semibold rounded-md  transition duration-200 flex items-center"
          >
            {showMore ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
