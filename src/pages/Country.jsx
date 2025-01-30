import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import Loader from "../components/layout/UI/Loader";
import CountryCard from "../components/layout/CountryCard";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries,setCountries]=useState([])

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
  return <div className="m-25">
    <ul className="grid grid-cols-4 justify-items-center gap-5">
      {countries.map((curCountry,index)=>{
        return <CountryCard country={curCountry} key={index}  />
      })}
    </ul>
  </div>;
};

export default Country;
