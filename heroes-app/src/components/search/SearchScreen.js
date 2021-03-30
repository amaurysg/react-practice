import React, { useMemo } from "react";
//Import query-string ... also download package npm
import queryString from "query-string";
import { useHistory, useLocation } from "react-router";
import HeroCard from "../heroes/HeroCard";
import useForm from "../hooks/useForm";
import getHeroByName from "../../selectors/getHeroByName";

const SearchScreen = () => {
  const history = useHistory();
  //import useLocation to search location.search //{}
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  //Here implement useForm with your values
  const [values, handleInputChange] = useForm({
    //searchText is name in input
    searchText: q,
  });

  const { searchText } = values;
  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

  // console.log(location.search);

  //desestructure {q} /query/

  //Here called data from heroes (import above)

  //desestructure

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Go...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" && <div className="alert alert-info">Search Hero</div>}
          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">{`There is not hero ${q}`}</div>
          )}

          {heroesFiltered.map((hero) => {
            return <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
