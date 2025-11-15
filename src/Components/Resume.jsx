import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 shadow-md rounded-2xl text-gray-800 font-sans mt-20 hover:shadow-xl hover:bg-white transition-shadow duration-300">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Resume
      </h1>

      <div className="border-b border-gray-300 pb-4 mb-6">
        <h2 className="text-2xl font-semibold">Kuldeep Gupta</h2>
        <div className="mt-2 space-y-1 text-gray-700">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:kuldeepgupta8800@gmail.com"
              className="text-blue-600 hover:underline"
            >
              kuldeepgupta8800@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">GitHub:</span>{" "}
            <a
              href="https://github.com/kuldeep12309"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              github.com/kuldeep12309
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +91-8418835697
          </p>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-500 inline-block pb-1 mb-3">
          Professional Summary
        </h3>
        <p className="text-gray-700 ">
          Passionate and detail-oriented <strong>Full Stack Developer</strong>{" "}
          with hands-on experience in building dynamic, responsive, and scalable
          web applications using <strong>React.js</strong> for frontend and{" "}
          <strong>Django / Django REST Framework (DRF)</strong> for backend.
          Adept at crafting clean, efficient code and integrating APIs for
          seamless data flow. Committed to continuous learning, teamwork, and
          delivering exceptional user experiences.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-500 inline-block pb-1 mb-3">
          Technical Skills
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>
            <strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+), Python
          </li>
          <li>
            <strong>Frontend:</strong> React.js, Redux Toolkit, Tailwind CSS
          </li>
          <li>
            <strong>Backend:</strong> Django, Django REST Framework (DRF)
          </li>
          <li>
            <strong>Database:</strong> MySQL, SQLite3
          </li>
          <li>
            <strong>APIs:</strong> RESTful API design & integration, Postman for
            testing
          </li>
          <li>
            <strong>Tools & Platforms:</strong> Git, GitHub, Vercel (Deployment)
          </li>
          <li>
            <strong>React Tools:</strong> Context API, useState, useEffect,
            useContext
          </li>
          <li>
            <strong>Responsive Design:</strong> Tailwind CSS (Mobile-first
            approach)
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-500 inline-block pb-1 mb-3">
          Experience
        </h3>
        <div>
          <h4 className="font-semibold text-lg">
            Full Stack Developer (Trainee) — Universal CodeBox
          </h4>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>
              Developed and deployed full-stack web applications using React.js
              and Django REST Framework.
            </li>
            <li>
              Designed and consumed RESTful APIs for efficient frontend-backend
              communication.
            </li>
            <li>
              Built dynamic UI components with React Hooks and Tailwind CSS.
            </li>
            <li>
              Managed backend logic and database models using Django ORM with
              MySQL and SQLite3.
            </li>
            <li>
              Utilized Git & GitHub for version control and deployed apps using
              Vercel.
            </li>
            <li>
              Tested and documented APIs using Postman for consistent
              integration and debugging.
            </li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-500 inline-block pb-1 mb-3">
          Projects
        </h3>

        <div className="space-y-4 text-gray-700">
          <div>
            <h4 className="font-semibold text-lg">
              1. E-Commerce Website (React + Redux Toolkit)
            </h4>
            <p className="ml-8">
              Built a modern e-commerce app using React, Redux Toolkit, and
              Axios with API integration. Deployed live on{" "}
              <strong>Vercel</strong> for smooth performance and scalability.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">
              2. Portfolio Website (React + React Bits)
            </h4>
            <p className="ml-8">
              Developed a personal portfolio using React and React Bits for
              smooth animations and responsive UI. Hosted live on{" "}
              <strong>Vercel</strong> showcasing projects and skills.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">
              3. E-Commerce (React + Django REST Framework + MySQL)
            </h4>
            <p className="ml-8">
              Full-stack e-commerce application using React frontend, Django
              REST Framework backend, and MySQL database for product management,
              and API integration.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">
              4. REST API Project (DRF + SQLite)
            </h4>
            <p className="ml-8">
              Created a RESTful API using Django REST Framework and SQLite
              database.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-500 inline-block pb-1 mb-3">
          Education
        </h3>
        <p className="text-gray-700">
          <strong>Bachelor of Commerce (B.Com)</strong> — Final Year
        </p>
      </section>
    </div>
  );
};

export default Resume;
