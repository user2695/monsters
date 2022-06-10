import React from "react";

function Card(props) {
  return (
    <>    
      <div className="card">
      <p>{props.id}</p>
        <h1>{props.name}</h1>
      </div>
    </>
  );
}

export default Card;
