import React from "react";
import "../assets/styles/recentWorks.scss";
import project1 from "../assets/images/project_burkett_image.png";
import project2 from "../assets/images/project_chronicled_image.png";
import project3 from "../assets/images/project_coupal_image.png";
import project4 from "../assets/images/project_glc_image.png";
import project5 from "../assets/images/project_welder_image.png";
import www from "../assets/images/www.png";

const RecentWorks = () => {
  return (
    <div className="recentWorkContainer">
      <div className="heading">
        <h2>My Recent Work</h2>
        <p>
          Here are a few past design projects I've worked on. Want to see more?{" "}
          <span>Email me.</span>
        </p>
      </div>
      <div className="projects_grid">
        <div className="project_tab">
          <img src={project1} alt="no-img" />
        </div>
        <div className="project_tab">
          <img src={project2} alt="no-img" />
        </div>
        <div className="project_tab">
          <img src={project3} alt="no-img" />
        </div>
        <div className="project_tab">
          <img src={project4} alt="no-img" />
        </div>
        <div className="project_tab">
          <img src={project5} alt="no-img" />
        </div>
        <div className="project_tab">
          <img src={project5} alt="no-img" />
        </div>
      </div>
      <button>
        <span>
          <img src={www} alt="no_img" />{" "}
        </span>
        See more on Dribble
      </button>
    </div>
  );
};

export default RecentWorks;
