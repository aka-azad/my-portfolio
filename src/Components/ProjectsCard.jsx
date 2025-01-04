import { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
import "daisyui/dist/full.css";

const ProjectCard = ({
  title,
  description,
  screenshots,
  liveLink,
  repoLink,
  details,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="project-card bg-white rounded-lg shadow-md overflow-hidden relative group">
      <Slider {...settings} className="h-60">
        {screenshots.map((screenshot, index) => (
          <div key={index} className="h-60">
            <img
              src={screenshot}
              alt={`${title} screenshot ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="p-4 absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between opacity-100  sm:group-hover:opacity-100 md:opacity-100 md:group-hover:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-lg text-white mb-4">{description}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-between">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full bg-orange-500 py-0"
          >
            <FaExternalLinkAlt className="mr-1 sm:mr-2" /> Live Link
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full bg-orange-500 py-0"
          >
            <FaGithub className="mr-1 sm:mr-2" /> Git Repo
          </a>
          <div className="col-span-2">
            <button
              onClick={openModal}
              className="btn btn-primary w-full  bg-orange-500 py-0"
            >
              <FaInfoCircle className="mr-1 sm:mr-2" /> View Details
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-lg mb-4">{details}</p>
            <div className="modal-action">
              <button
                onClick={closeModal}
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  screenshots: PropTypes.array.isRequired,
  liveLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default ProjectCard;
