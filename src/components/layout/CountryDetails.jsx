import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './UI/Loader';
import { getCountryIndividualData } from '../../api/PostApi';

const CountryDetails = () => {
    const params=useParams();
    console.log(params)
    const [isPending, startTransition] = useTransition();
    const [country,setCountry]=useState([])

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndividualData(params.id);
        console.log("c res : ",res);
        
        if(res.status==200)
        {
            setCountry(res.data)
        }
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
  return (
    <div>
      details
    </div>
  )
}

export default CountryDetails
