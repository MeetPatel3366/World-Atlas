import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loader from "./UI/Loader";
import { getCountryIndividualData } from "../../api/PostApi";

const CountryDetails = () => {
  const { name } = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndividualData(name);
        console.log("c res : ", res);

        if (res.status == 200) {
          console.log("name : ", res.data[0]);
          setCountry(res.data[0]);
          console.log("country : ", country);
        }
      } catch (err) {
        console.log("Error feching data : ", err);
      }
    });
  }, [name]);

  useEffect(() => {
    console.log("updated country : ", country);
  }, [country]);

  if (isPending)
    return (
      <>
        <Loader />
      </>
    );
  return <div>
    {country && 
    <div className="grid grid-cols-2 justify-items-center m-32">
        <img src={country.flags.svg} alt={country.flags.alt} className=" w-60 object-contain" />
        <div>
            <p> {country.name.official}</p>

            <div>
                <p>
                    <span>Native Names:</span>
                    {
                        Object.keys(country.name.nativeName).map((key)=>country.name.nativeName[key].common).join(", ")
                    }
                </p>
                <p>
                    <span>Population:</span>
                    {
                        country.population
                    }
                </p>
                <p>
                    <span>Region:</span>
                    {
                        country.region
                    }
                </p>
                <p>
                    <span>Sub Region:</span>
                    {
                        country.subregion
                    }
                </p>
                <p>
                    <span>Capital:</span>
                    {
                        country.capital
                    }
                </p>
                <p>
                    <span>Top Level Domain:</span>
                    {
                        country.tld[0]
                    }
                </p>
                <p>
                    <span>Currencies:</span>
                    {
                        Object.keys(country.currencies)
                        .map((curCurrencies)=>country.currencies[curCurrencies].name).join(", ")
                    }
                </p>
                <p>
                    <span>Languages:</span>
                    {
                        Object.keys(country.languages)
                        .map((curLanguage)=>country.languages[curLanguage])
                        .join(", ")
                    }
                </p>
            </div>
        </div>
    
    </div>}
    <div>
        <NavLink to='/country'>
            <button>Go Back</button>
        </NavLink>
    </div>
</div>;
};

export default CountryDetails;
