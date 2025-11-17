import React from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    skills: ["Python", "Django", "Django REST Framework", "SQLite", "MySQL"],
  },
  {
    category: "State & Routing",
    skills: ["Redux Toolkit", "React Router", "useState", "useEffect"],
  },
  {
    category: "API & Tools",
    skills: ["Axios", "Postman", "RESTful API Development", "Fetch API"],
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    category: "Deployment",
    skills: ["Vercel", "Render", "Netlify"],
  },
];

const About = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-20">
          My Skills
        </h1>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-8  ">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="shadow-md rounded-xl p-6 hover:shadow-xl hover:scale-105 transform transition  duration-300 hover:bg-white"
            >
              <h2 className="text-lg font-semibold text-blue-700 mb-4 border-b-2 border-blue-500 inline-block">
                {category.category}
              </h2>

              <ul className="space-y-2 ">
                {category.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between hover:text-gray-700 font-medium text-md"
                  >
                    <span>{skill}</span>
                   
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
