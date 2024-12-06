import React from "react";
import bootstraplogos from "../assets/images/bootstraplogos.svg";
import share from "../assets/images/share.png";
import "../assets/styles/projects.scss";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <div className="project_intro">
        <h2>My Startup Projects</h2>
        <p>
          I'm a bit of a digital product junky. Over the years I've used
          hundreds of web and mobile apps in different industries and verticals.
          Eventually, I decided that it would be a fun challenge to design and
          build my own.
        </p>
      </div>
      <div className="projects_grid">
        <div className="preoject_info">
          <div className="logo">
            <img src={bootstraplogos} alt="no-img" />
          </div>
          <div className="description">
            <h4>
              Affordable, human-crafted logos for startups and indie projects.
            </h4>
          </div>
          <div className="link">
            <img src={share} alt="no-img" />
            <p>bootstraplogos.com</p>
          </div>
        </div>
        <div className="preoject_info">
          <div className="logo">
            <img src={bootstraplogos} alt="no-img" />
          </div>
          <div className="description">
            <h4>
              Affordable, human-crafted logos for startups and indie projects.
            </h4>
          </div>
          <div className="link">
            <img src={share} alt="no-img" />
            <p>bootstraplogos.com</p>
          </div>
        </div>
        <div className="preoject_info">
          <div className="logo">
            <img src={bootstraplogos} alt="no-img" />
          </div>
          <div className="description">
            <h4>
              Affordable, human-crafted logos for startups and indie projects.
            </h4>
          </div>
          <div className="link">
            <img src={share} alt="no-img" />
            <p>bootstraplogos.com</p>
          </div>
        </div>
        <div className="preoject_info">
          <div className="logo">
            <img src={bootstraplogos} alt="no-img" />
          </div>
          <div className="description">
            <h4>
              Affordable, human-crafted logos for startups and indie projects.
            </h4>
          </div>
          <div className="link">
            <img src={share} alt="no-img" />
            <p>bootstraplogos.com</p>
          </div>
        </div>
        <div className="preoject_info">
          <div className="logo">
            <img src={bootstraplogos} alt="no-img" />
          </div>
          <div className="description">
            <h4>
              Affordable, human-crafted logos for startups and indie projects.
            </h4>
          </div>
          <div className="link">
            <img src={share} alt="no-img" />
            <p>bootstraplogos.com</p>
          </div>
        </div>
        <div className="preoject_info">
          <div className="logo">
            <img src={bootstraplogos} alt="no-img" />
          </div>
          <div className="description">
            <h4>
              Affordable, human-crafted logos for startups and indie projects.
            </h4>
          </div>
          <div className="link">
            <img src={share} alt="no-img" />
            <p>bootstraplogos.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
