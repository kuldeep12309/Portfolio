const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built using React and React Bits for smooth animations and modern UI effects. Showcases my projects, skills, and contact information in a clean and responsive layout.",
      tech: ["React", "React Bits", "Tailwind CSS"],
      live: "https://portfolio-rho-rosy-kyenn36oir.vercel.app/",
      github: "https://github.com/kuldeep12309/Portfolio",
    },
    {
      id: 2,
      title: "E-Commerce Website (React)",
      description:
        "A modern e-commerce platform built with React, Axios, and Redux Toolkit. It connects with a REST API for product and user management. Deployed live on Vercel.",
      tech: ["React", "Axios", "Redux Toolkit", "REST API", "Vercel"],
      live: "https://eccomerce-website-red.vercel.app/",
      github: "https://github.com/kuldeep12309/Eccomerce-React",
    },
    {
      id: 3,
      title: "REST API with Django + SQLite",
      description:
        "A RESTful API built using Django REST Framework and SQLite. Includes CRUD endpoints, authentication, and live hosting.",
      tech: ["Django", "DRF", "SQLite"],

      github: "https://github.com/kuldeep12309/RestApi-sqllite3",
    },
  ];

  return (
    <section className="py-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="mt-20  hover:bg-white shadow-xl rounded-lg p-6 hover:shadow-xl hover:scale-105 transform transition duration-300"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-900 mb-4 text-sm">
                {project.description}
              </p>

              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase">
                  Tech Stack:
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-sm font-medium px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                  
                    className="text-sm font-semibold text-white bg-green-600 px-3 py-2 rounded hover:bg-green-700 transition-colors duration-300"
                  >
                    Live Demo 
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    
                    className="text-sm font-semibold text-white bg-gray-800 px-3 py-2 rounded hover:bg-gray-900 transition-colors duration-300"
                  >
                    GitHub 
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
