import React from "react";
import useFlip from './hook.js'
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, toggleCardFace] = useFlip();

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggleCardFace}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
