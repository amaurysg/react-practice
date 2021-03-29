import React from "react";
import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

//This is component to Renderind
//Received publisher

const HeroList = ({ publisher }) => {
  //Eject function getHero... (publisher)
  const heroes = getHeroesByPublisher(publisher);
  console.log(heroes);

  //render cont heroes with result of function from above
  return (
    <div className="card-columns">
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};

export default HeroList;
