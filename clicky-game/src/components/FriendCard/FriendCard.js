import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div>
    <div className="img-container">
      
      <button onClick={() => props.scoreCount(props.id)} className="count">

      <img alt={props.name} src={props.image} />
      
      </button>
    </div>
  </div>
);

export default FriendCard;
