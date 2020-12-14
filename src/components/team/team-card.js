import React from "react";
import SocialLinks from "../social-links";

const TeamCard = ({ extraClass, image, name, designation }) => {
  return (
    <div className={`team-card text-center ${extraClass}`}>
      <div className="team-card__image">
        <img src={image} alt="" />
      </div>
      <div className="team-card__social">
        <SocialLinks />
      </div>
      <div className="team-card__content">
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;
