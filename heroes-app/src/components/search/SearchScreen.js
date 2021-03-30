import React from "react";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router";
import { heroes } from "../../data/heroes";
import HeroCard from "../heroes/HeroCard";
import useForm from "../hooks/useForm";

const SearchScreen = () => {
  const history = useHistory();
  //import useLocation to search location.search //{}
  const location = useLocation();

  // console.log(location.search);

  //desestructure {q} /query/
  const { q = "" } = queryString.parse(location.search);

  //Here called data from heroes (import above)
  const heroesFiltered = heroes;
  //Here implement useForm with your values
  const [values, handleInputChange, reset] = useForm({
    //searchText is name in input
    searchText: "",
  });

  //desestructure
  const { searchText } = values;

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
          {heroesFiltered.map((hero) => {
            return <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
