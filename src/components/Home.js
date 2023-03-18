import LogoTitle from "../assets/images/logo-p.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimatedLetters from "./AnimatedLetters";
import "./Home.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate"); // useState for animation on hover
  const nameArray = ["a", "t", "r", "i", "c", "k"];
  const jobArray = "web developer".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          {/*This one diff classname, so it animates AFTER previous letter */}
          <span className={`${letterClass} _12`}>i</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={21}
          />
        </h1>
        <h2>Frontend Developer / Walking Enthusiast / Film Guy</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
