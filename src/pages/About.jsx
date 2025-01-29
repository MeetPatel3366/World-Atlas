import React from 'react'
import countryFacts from '../api/countryData.json'

const About = () => {
  return (
    <section className='max-w-[80rem] m-auto mt-3'>
      <h1 className='text-center text-3xl font-semibold mb-10'>Here are the Interesting Facts <br /> we're proud of
      </h1>
      <div className='flex flex-wrap gap-3.5 justify-around my-5'>
        {
          countryFacts.map((curCard)=>{
            const {id,countryName,capital,population,interestingFact}=curCard
            return(
              <div className='max-w-90 border-2 rounded-md rounded-b-lg p-7' key={id}>
            <p>{countryName}</p>
            <p>
              <span>Capital:</span> {capital}
            </p>
            <p>
              <span>Population:</span> {population}
            </p>
            <p>
                <span>interesting Fact:</span> {interestingFact}
            </p>
          </div>
            )
          })
        }

        
       
       
      </div>
    </section>
  )
}

export default About
