import React from "react";
import logo from "../logo.svg";

function CardImage({ active }) {
  return (
    <div className='img-container'>
      <img
        src={logo}
        alt='Person'
        style={active ? { border: "2px solid rgb(37 99 235)" } : {}}
      />
    </div>
  );
}

export default CardImage;
