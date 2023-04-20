import React from 'react'
import expenseTracker from '../assets/portfolio/expense-tracker-2.png'
import jaaro from '../assets/portfolio/jaaro-1.png'
import jobFinder from '../assets/portfolio/jobFinder-2.png'
import dashboard from "../assets/portfolio/dashboard.png";
import fivarr from "../assets/portfolio/fiverr.png";
import pizza from "../assets/portfolio/pizzaPlace.png";
import quiz from "../assets/portfolio/quizApp.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: dashboard,
      code: "https://github.com/nidal23/dashboard.git",
      demo: "https://uidashboardnoai.netlify.app/",
    },
    {
      id: 2,
      src: fivarr,
      code: "https://github.com/nidal23/fivarr.git",
      demo: "https://fivarrr-clone.netlify.app",
    },
    {
      id: 3,
      src: jobFinder,
      code: "https://github.com/nidal23/jobfinder.git",
      demo: "https://jobfinderbyniwizmo.netlify.app",
    },
    {
      id: 4,
      src: expenseTracker,
      code: "https://github.com/nidal23/expensetracker.git",
      demo: "https://expense-tracker-nm.netlify.app",
    },
    {
      id: 5,
      src: quiz,
      code: "https://github.com/nidal23/quiz-app.git",
      demo: "https://quiz-app707.netlify.app/",
    },
    {
      id: 6,
      src: pizza,
      code: "https://github.com/nidal23/pizzaListing.git",
      demo: "https://pizzaplace707.netlify.app/",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Portfolio
          </p>
          <p className="py-6">
            Take a look at a some of projects that I have worked on recently.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 object-fill mx-auto mt-5"
              />
              <div className="flex items-center justify-center">
                <a
                  href={code}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>

                <a
                  href={demo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;