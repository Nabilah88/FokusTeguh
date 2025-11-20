import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = ({ name, title, degree, experience, strengths, memberships, image }) => {
  return (
    <div className="card">
      <div className="circle-image">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p className="title">{title}</p>
       <p className="degree">{degree}</p>
      <p className="experience">{experience}</p>
      <p className="strengths">{strengths}</p>
      <p className="memberships">{memberships}</p>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default TeamMemberCard;
