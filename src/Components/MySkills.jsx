import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFire,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "bg-red-500" },
  { name: "CSS", icon: FaCss3Alt, color: "bg-blue-500" },
  { name: "React", icon: FaReact, color: "bg-teal-500" },
  { name: "Node.js", icon: FaNodeJs, color: "bg-green-500" },
  { name: "MongoDB", icon: FaDatabase, color: "bg-gray-500" },
  { name: "Firebase", icon: FaFire, color: "bg-yellow-500" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "bg-blue-300" },
  { name: "Tailwind CSS", icon: SiDaisyui, color: "bg-pink-300" },
];

const MySkills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="skills" className="skill-section p-10 text-primary">
      <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill text-center px-2 ${skill.color} rounded-lg shadow-md`}
          >
            <div className="p-4">
              <skill.icon className="mx-auto mb-2 text-white text-6xl" />
              <p className="text-lg text-white">{skill.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySkills;
