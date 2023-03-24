import { useState, useEffect } from "react";
import AnimatedLetters from "./AnimatedLetters";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate"); // useState for animation on hover

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          {/* 15 means 1.5 second delay */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"About me".split("")}
            idx={15}
          />
        </h1>
        <p>Placeholder paragraph 1</p>
        <p>Placeholder paragraph 2</p>
        <p>Placeholder paragraph 3</p>
      </div>
    </div>
  );
};

export default About;
