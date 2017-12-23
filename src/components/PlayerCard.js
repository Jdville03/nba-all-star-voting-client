import React from "react";

const PlayerCard = ({ player }) => (
  <div className="PlayerCard">
    <img src={player.image_url} alt={player.last_name} className="PlayerImage" />
    <h3>
      {player.first_name} {player.last_name}
    </h3>
    <p>
      #{player.jersey_number} - {player.position}
    </p>
  </div>
);

export default PlayerCard;
