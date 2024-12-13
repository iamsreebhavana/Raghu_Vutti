import React from "react";
import communication from "../assets/images/communication.png";
import "../assets/styles/collaboration.scss";

const Collaboration = () => {
  return (
    <div className="collaboratingContainer">
      <h2>Interested in collaborating with me?</h2>
      <p>
        I'm always open to discussing product design work or partnership
        oppurtunities.
      </p>
      <button>
        <span>
          <img src={communication} alt="no_img" />{" "}
        </span>
        Start a conversation
      </button>
    </div>
  );
};

export default Collaboration;
