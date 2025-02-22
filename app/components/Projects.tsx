import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Stock Advisor",
    description: "An Instagram bot to encourage followers to stop scrolling by posting often (daily). Currently posts at 9am, 1pm, 5pm, 9pm, 12am EDT",
    image: "/path/to/project-one.jpg",
    demoLink: "https://demo-link.com/project-one",
    githubLink: "https://github.com/username/project-one",
  },
  {
    id: 2,
    name: "Get Off IG",
    description: "This is a description for Project Two.",
    image: "/path/to/project-two.jpg",
    demoLink: "https://demo-link.com/project-two",
    githubLink: "https://github.com/username/project-two",
  },
  {
    id: 3,
    name: "Project Three",
    description: "This is a description for Project Three.",
    image: "/path/to/project-three.jpg",
    demoLink: "https://demo-link.com/project-three",
    githubLink: "https://github.com/username/project-three",
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
            <div key={project.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
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
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;