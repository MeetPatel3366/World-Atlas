import React from "react";

const SearchFilter = (props) => {
  const { search, setSearch, filter, setFilter, countries, setCountries} = props;

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleRegionSelect = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };
  const sortCountries=(value)=>{
    const sortCountry=[...countries].sort((a,b)=>{
        return value=="asc"?
        a.name.common.localeCompare(b.name.common):
        b.name.common.localeCompare(a.name.common)
    })
    setCountries(sortCountry)
  }
  return (
    <section>
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button className="bg-blue-400 m-5" onClick={()=>sortCountries('asc')}>Asc</button>
        <button className="bg-blue-400 m-5" onClick={()=>sortCountries('des')}>Des</button>
      </div>

      <div>
        <select value={filter} onChange={handleRegionSelect}>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
