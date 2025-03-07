import React from "react";
import Image from "next/image";
import EclipseButton from "@/components/ui/EclipseButton";

const projects = [
  {
    id: 1,
    name: "Stock Advisor",
    description: "A bot that is able to determine whether your stocks in a portfolio are undervalued using an algorithm.",
    image: "/project1.png",
    demoLink: "",
    githubLink: "https://github.com/felimart2003/Stock-advisor",
    infoLink: "",
  },
  {
    id: 2,
    name: "Get Off IG",
    description: "An Instagram bot to encourage followers to stop scrolling by posting often (daily).",
    image: "project2.png",
    demoLink: "https://www.instagram.com/turnoffig/",
    githubLink: "https://github.com/username/project-two",
    infoLink: "",
  },
  {
    id: 3,
    name: "Canada-Wide Science Fair",
    description: "Analyzed the application of the Golden Ratio, originally in consumer product design, but later focusing on automobile design, examining its impact on aesthetics, public appeal, and price correlation.",
    image: "/project3.png",
    demoLink: "",
    githubLink: "",
    infoLink: "http://secure.youthscience.ca/virtualcwsf/projectdetails.php?id=5164&",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex justify-between mt-auto space-x-2">
                {project.name === "Canada-Wide Science Fair" ? (
                  project.infoLink && (
                    <a
                      href={project.infoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 no-underline"
                    >
                      Info
                    </a>
                  )
                ) : (
                  <>
                    {project.demoLink && (
                      <EclipseButton href={project.demoLink} text="Demo" />
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 no-underline"
                    >
                      GitHub
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
