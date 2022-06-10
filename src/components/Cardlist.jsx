import React from "react";
import Card from "./Card";
import monsters from "../monsters";

function create(monster) {
  return (
    <div >
      <Card name={monster.name} id={monster.id} />
    </div>
  );
}
function Cardlist() {
  return (
    <div>
      <h1 className="h1">Monsters</h1>
      {monsters.map(create)}
    </div>
  );
}

export default Cardlist;
