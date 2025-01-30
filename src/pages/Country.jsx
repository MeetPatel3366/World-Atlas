import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import Loader from "../components/layout/UI/Loader";
import CountryCard from "../components/layout/CountryCard";
import SearchFilter from "../components/layout/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries,setCountries]=useState([])

  const [search,setSearch]=useState("")
  const [filter,setFilter]=useState("all")

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data)
      } catch (err) {
        console.log("Error feching data : ", err);
      }
    });
  }, []);

  if (isPending)
    return (
      <>
        <Loader/>
      </>
    );

  console.log(search,filter);

  const searchCountry=(curCountry)=>{
    if(search)
    {
      return curCountry.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return curCountry
  }
  const filterRegion=(curCountry)=>{
    if(filter=="all") return curCountry
      return curCountry.region==filter
  }
  const filterCountries=countries.filter((curCountry)=>searchCountry(curCountry) && filterRegion(curCountry))
  
  return <div className="m-25">
    <SearchFilter countries={countries} setCountries={setCountries} search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
    <ul className="grid grid-cols-4 justify-items-center gap-5">
      {filterCountries.map((curCountry,index)=>{
        return <CountryCard country={curCountry} key={index}  />
      })}
    </ul>
  </div>;
};

export default Country;
