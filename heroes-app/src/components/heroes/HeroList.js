import React from "react";
import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";

//This is component to Renderind
//Received publisher

const HeroList = ({ publisher }) => {
  //Eject function getHero... (publisher)
  const heroes = getHeroesByPublisher(publisher);
  console.log(heroes);

  //render cont heroes with result of function from above
  return (
    <ul>
      {heroes.map((hero) => {
        return <li key={hero.id}>{hero.superhero}</li>;
      })}
    </ul>
  );
};

export default HeroList;
