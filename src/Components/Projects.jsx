import ProjectCard from "./ProjectsCard";
import backgroundImage from "../assets/bg-pr.gif";

// Sample project data (replace this with your actual project data)
const projects = [
  {
    title: "Study Buddies",
    description: "This is a description of Project One.",
    screenshots: ["path-to-image-1.jpg", "path-to-image-2.jpg"], // Replace with the actual paths to the images
    liveLink: "https://study-buddies-by-ashraf.web.app/", // Replace with the actual live link
    repoLink: "https://github.com/yourusername/project-one", // Replace with the actual repo link
    details: "Detailed information about Project One.", // Add detailed information about the project
  },
  {
    title: "Crowd Cube",
    description: "This is a description of Project Two.",
    screenshots: ["path-to-image-3.jpg", "path-to-image-4.jpg"], // Replace with the actual paths to the images
    liveLink: "https://crowdcube-f0e0f.web.app/", // Replace with the actual live link
    repoLink: "https://github.com/yourusername/project-two", // Replace with the actual repo link
    details: "Detailed information about Project Two.", // Add detailed information about the project
  },
  {
    title: "Project Two",
    description: "This is a description of Project Two.",
    screenshots: ["path-to-image-3.jpg", "path-to-image-4.jpg"], // Replace with the actual paths to the images
    liveLink: "https://clothingforall-b10-a9.netlify.app/", // Replace with the actual live link
    repoLink: "https://github.com/yourusername/project-two", // Replace with the actual repo link
    details: "Detailed information about Project Two.", // Add detailed information about the project
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="projects-section bg-cover bg-center bg-fixed rounded-lg mt-4 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-gradient-to-r from-[#8a878777] via-[#b62c2c48] to-[#573bca3d] bg-opacity-50  p-10 rounded-lg">
        <h2 className="text-3xl text-white font-bold text-center mb-6">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              screenshots={project.screenshots}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
              details={project.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
