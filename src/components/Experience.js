import React from "react";
import coding from "../assets/images/coding.png";
import configuration from "../assets/images/configuration.png";
import technology from "../assets/images/technology.png";
import "../assets/styles/experience.scss";

const Experience = () => {
  return (
    <div className="experienceContainer">
      <div className="experience_column">
        <div className="exp_section">
          <div className="coding_image">
            <img src={coding} alt="no-img" />
          </div>
          <h4>Designer</h4>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p><br/>
          <div className="tools">
            <h4>Things I enjoy designing:</h4>
            <p>UX, UI, Web, Apps, Logos</p>
          </div><br/>
          <div className="designTools">
            <h4>Design Tools:</h4>
            <ul>
              <li>Affinity Designer</li>
              <li>Affinity Designer</li>
              <li>Affinity Designer</li>
              <li>Affinity Designer</li>
              <li>Affinity Designer</li>
            </ul>
          </div>
        </div>
        <div className="exp_section">
          <div className="coding_image">
            <img src={configuration} alt="no-img" />
          </div>
          <h4>Designer</h4>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p><br/>
          <div className="tools">
            <h4>Things I enjoy designing:</h4>
            <p>UX, UI, Web, Apps, Logos</p>
          </div><br/>
          <div className="designTools">
            <h4>Design Tools:</h4>
            <ul>
              <li>Affinity Designer</li>
              <li>Affinity Designer</li>
              <li>Affinity Designer</li>
              <li>Affinity Designer</li>
              <li>Affinity Designer</li>
            </ul>
          </div>
        </div>
        <div className="exp_section">
          <div className="coding_image">
            <img src={technology} alt="no-img" />
          </div>
          <h4>Designer</h4>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p><br/>
          <div className="tools">
            <h4>Things I enjoy designing:</h4>
            <p>UX, UI, Web, Apps, Logos</p>
          </div><br/>
          <div className="designTools">
            <h4>Design Tools:</h4>
            <ul>
              <li>Affinity Designer</li>
              <li>Affinity Designer</li>
              <li>Affinity Designer</li>
              <li>Affinity Designer</li>
              <li>Affinity Designer</li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Experience;
