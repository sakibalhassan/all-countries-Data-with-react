import { useState } from 'react';
import './Country.css';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const{name,flags,population,area,cca3}=country;
    console.log(country)

    const[visited,setVisited]=useState(false);

    const handleVisited=()=>{
        setVisited(!visited);
    }


    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'purple': 'black'}}>name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Visited Flags</button>
            <br />
            <button onClick={handleVisited}>{visited ?'Visited' :'Going'}</button>
            {visited ? 'I Have Visited This Country' :'i want to visited'}
        </div>
    );
};

export default Country;