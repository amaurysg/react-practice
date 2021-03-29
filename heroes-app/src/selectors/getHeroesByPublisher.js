import React from "react";
import { heroes } from "../data/heroes";

const getHeroesByPublisher = (publisher) => {
  //array with values valid

  const validPublishers = ["DC Comics", "Marvel Comics"];

  //if values of validPublisher don't here so...
  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publishers "${publisher}" no es correcto `);
  }
  //function filter hero by publisher valid
  return heroes.filter((hero) => hero.publisher === publisher);
};
//return function with all.
export default getHeroesByPublisher;
