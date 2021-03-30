import React, { useMemo } from "react";
import { Redirect, useHistory, useParams } from "react-router";
import getHeroesById from "../../selectors/getHeroesById";

const HeroScreen = () => {
  //Here used hooks from react-router to capture objects from url
  //hero/:{heroeId}/ see the router from DashBoardRoutes
  // <Route exact path="/hero/:heroeId" component={HeroScreen} />;
  const { heroeId } = useParams();

  const history = useHistory();

  const heroe = useMemo(() => getHeroesById(heroeId), [heroeId]);
  //here called my function by Id and assigned heroeId

  console.log(heroe);

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = heroe;

  if (!heroe) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>Alter ego: {alter_ego}</b>{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher: {publisher}</b>{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First Appearance: {first_appearance}</b>{" "}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          {" "}
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
