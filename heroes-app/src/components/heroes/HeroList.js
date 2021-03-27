import React from "react";
import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";

const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  console.log(heroes);

  return (
    <ul>
      {heroes.map((hero) => {
        return <li key={hero.id}>{hero.superhero}</li>;
      })}
    </ul>
  );
};

export default HeroList;
