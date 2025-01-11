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
  serverRepoLink,
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
      <Slider {...settings} className="h-72">
        {screenshots.map((screenshot, index) => (
          <div key={index} className="h-72">
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
        <div className="grid grid-cols-2 gap-1 justify-between">
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
            <FaGithub className="mr-1 sm:mr-2" /> Client git
          </a>
          <div
            className={`col-span-2 ${
              serverRepoLink && "grid grid-cols-2 gap-1"
            }`}
          >
            <button
              onClick={openModal}
              className="btn btn-primary w-full  bg-orange-500 py-0"
            >
              {!serverRepoLink && <FaInfoCircle className="mr-1 sm:mr-2" />}
              View Details
            </button>
            {serverRepoLink && (
              <a
                href={serverRepoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full bg-orange-500 py-0"
              >
                <FaGithub className=" sm:mr-2" /> Server git
              </a>
            )}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-lg mb-4">{description}</p>
            <div>
              <p className="text-lg mb-2">
                <strong>Technologies Used:</strong>{" "}
                {details.technologiesUsed.join(", ")}
              </p>
              <p className="text-lg mb-2">
                <strong>Features:</strong> {details.features.join(", ")}
              </p>
              <p className="text-lg mb-2">
                <strong>Challenges Faced:</strong> {details.challengesFaced}
              </p>
              <p className="text-lg mb-2">
                <strong>Learning Outcomes:</strong> {details.learningOutcomes}
              </p>
              <p className="text-lg mb-2">
                <strong>Role in Team:</strong> {details.roleInTeam}
              </p>
              <p className="text-lg mb-2">
                <strong>Security Measures:</strong> {details.securityMeasures}
              </p>
            </div>
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
  serverRepoLink: PropTypes.string,
  details: PropTypes.shape({
    technologiesUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    challengesFaced: PropTypes.string.isRequired,
    learningOutcomes: PropTypes.string.isRequired,
    roleInTeam: PropTypes.string.isRequired,
    securityMeasures: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
