import ProjectCard from "./ProjectsCard";
import backgroundImage from "../assets/bg-pr.gif";
import studyBuddies1 from "../assets/studyBuddies/image-(1).png";
import studyBuddies2 from "../assets/studyBuddies/image-(2).png";
import studyBuddies3 from "../assets/studyBuddies/image-(3).png";
import crowdCube1 from "../assets/crowdCube/image-(1).png";
import crowdCube2 from "../assets/crowdCube/image-(2).png";
import crowdCube3 from "../assets/crowdCube/image-(3).png";
import clothingForAll1 from "../assets/clothingForAll/image-(1).png";
import clothingForAll2 from "../assets/clothingForAll/image-(2).png";
import clothingForAll3 from "../assets/clothingForAll/image-(3).png";

// Sample project data (replace this with your actual project data)
const projects = [
  {
    title: "Study Buddies",
    description: "This platform created for students to create and submit assignments.",
    screenshots: [studyBuddies1, studyBuddies2, studyBuddies3], // Replace with the actual paths to the images
    liveLink: "https://study-buddies-by-ashraf.web.app/", // Replace with the actual live link
    repoLink: "https://github.com/aka-azad/study-buddies", // Replace with the actual repo link
    serverRepoLink: "https://github.com/aka-azad/study-buddies-server", // Replace with the actual repo link
    details: "Detailed information about Project One.", // Add detailed information about the project
  },
  {
    title: "Crowd Cube",
    description: "This is a Fund raising platform .",
    screenshots: [crowdCube1, crowdCube2, crowdCube3], // Replace with the actual paths to the images
    liveLink: "https://crowdcube-f0e0f.web.app/", // Replace with the actual live link
    repoLink: "https://github.com/aka-azad/crowd-cube-client", // Replace with the actual repo link
    serverRepoLink: "https://github.com/aka-azad/crowd-cube-server", // Replace with the actual repo link
    details: "Detailed information about Project Two.", // Add detailed information about the project
  },
  {
    title: "Clothing for All",
    description: "This is a cloth donation platform.",
    screenshots: [clothingForAll1, clothingForAll2, clothingForAll3], // Replace with the actual paths to the images
    liveLink: "https://clothingforall-b10-a9.netlify.app/", // Replace with the actual live link
    repoLink: "https://github.com/aka-azad/clothing-for-all", // Replace with the actual repo link
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
              serverRepoLink={project?.serverRepoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
