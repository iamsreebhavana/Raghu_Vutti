import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "../assets/styles/collaborationForm.scss";

const CollaborationForm = () => {
  // State management for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    interest: "",
    details: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_vmqvmfb', 'template_c7nhdqy', e.target, '-nkz5qb36EM7NF5no')
      .then(
        (result) => {
          alert('Your form was submitted successfully!');
        },
        (error) => {
          alert('There was an error submitting your form. Please try again.');
        }
      );
   
  };

  return (
    <div className="form-container">
      <h1>
        Want to discuss a startup collaboration?
        <br /> I'm most definitely game.
      </h1>
      <form onSubmit={handleSubmit}>
        {/* First Row: Name and Email */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Second Row: Project and Interest */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="project">Which project?</label>
            <select
              id="project"
              value={formData.project}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select project
              </option>
              <option value="Project 1">Project 1</option>
              <option value="Project 2">Project 2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="interest">Your interest</label>
            <select
              id="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select interest
              </option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
            </select>
          </div>
        </div>

        {/* Textarea */}
        <div className="form-group">
          <label htmlFor="details">Additional details</label>
          <textarea
            id="details"
            rows="5"
            placeholder="Provide more details..."
            value={formData.details}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="submit-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CollaborationForm;
