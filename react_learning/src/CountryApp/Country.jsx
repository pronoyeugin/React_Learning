import React from 'react';

const Country = (props) => {
  
  const { name, flags, capital, population, area, region } = props.country;

  const handleRemove =(name) =>{
        props.onRemoveCountry(name);
    }


  return (
    
    <article className="country-card">
      <img src={flags.png} alt="Country Flag" className="country-flag" />
      <div className="country-info">
        <h4 className="country-name">{name}</h4>
        
        <div className="country-details">
          <p><strong>Capital:</strong> {capital}</p>
          <p><strong>Region:</strong> {region}</p>
          <p><strong>Area:</strong> {area} km²</p>
          <p><strong>Population:</strong> {population}</p>
        </div>
        <button className="remove-btn" onClick={() => {
            handleRemove(name)
        }}>Remove Country</button>
      </div>
    </article>
  );
};

export default Country;