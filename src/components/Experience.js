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
          <h4>Key Areas of Expertise</h4>

          <br />
          <div className="designTools">
            <p>Infrastructure Design</p>
            <p>Cloud Architecture</p>
          </div>
        </div>
        <div className="exp_section">
          <div className="coding_image">
            <img src={configuration} alt="no-img" />
          </div>
          <h4>Technologies I work with:</h4>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <br />

          <div className="designTools">
            <h4>Design Tools:</h4>
            <ul>
              <li>Cloud Platforms: AWS, GCP, Azure</li>
              <li>
                Tools: Apache Spark, Kafka, Airflow, Snowflake, Redshift,
                BigQuery
              </li>
              <li>Languages: Python, SQL, Bash</li>
              <li>DevOps: Kubernetes, Terraform, Docker</li>
            </ul>
          </div>
        </div>
        <div className="exp_section">
          <div className="coding_image">
            <img src={technology} alt="no-img" />
          </div>
          <h4>Career Highlights</h4>

          <br />
          <div className="designTools">
            <h4>Design Tools:</h4>
            <ul>
              <li>8+ years of experience in designing data infrastructure</li>
              <li>Architected systems handling terabytes of data</li>
              <li>Optimized pipelines to improve performance by 40%</li>
              <li>
                Implemented scalable data platforms for enterprise-level clients
              </li>
              <li>
                Collaborated with cross-functional teams to deliver data-driven
                products
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
