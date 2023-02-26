import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 sm:mt-3">
            About
          </p>
        </div>

        <p className="text-xl mt-18">
          I'm a front-end developer with one year of experience building
          websites for startups at Neuwave Labs. During this time, I honed my
          skills in creating custom websites that met the unique needs of each
          client. I've also spent the past three years working on various
          projects that showcase my technical abilities and attention to detail.
        </p>

        <br />

        <p className="text-xl ">
          When I'm not coding, I enjoy traveling to new places and exploring
          different cultures. I'm also an avid Manchester United fan and enjoy
          watching matches in my spare time. GGMU.
        </p>
      </div>
    </div>
  );
};

export default About;