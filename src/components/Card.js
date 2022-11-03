import React from "react";
import CardImage from "./CardImage";
import Comments from "./Comments";
import NameTime from "./NameTime";

function Card({ active }) {
  return (
    <div className='card'>
      <CardImage active={active} />

      <div className='details-container'>
        <NameTime />
        <Comments />
      </div>
    </div>
  );
}

export default Card;
