import React from "react";
import { heroes } from "../data/heroes";

const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publishers "${publisher}" no es correcto `);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};

export default getHeroesByPublisher;
