import React,{useEffect, useState, useCallback} from 'react'
import Countries from './Countries';
import SearchCountry from './Search';


const url = "https://countries.dev/countries";

const CountryApp = () => {

    const [isloading , setIsLoading] = useState(true); 
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setfilteredCountries] = useState(countries);

    const fetchData = async (url) => {
        setIsLoading(true);
        try{
            const response = await fetch(url);
                const data = await response.json();
                setCountries(data);
                setfilteredCountries(data);
                setIsLoading(false);
                setError(null);
            }catch(error){
                setIsLoading(false);
                setError(error);
            }
    };

    useEffect(() => {
        fetchData(url);
    }, []); 

    const handleRemoveCountry = (name) => {
        const filter = filteredCountries.filter((country) => country.name !== name);
        setfilteredCountries(filter);
    }

      const handleSearch = useCallback((searchValue) => {
        let value = searchValue.toLowerCase();
        const newCountries = countries.filter((country) => {
        const countryName = country.name.toLowerCase();
        return countryName.startsWith(value); 
        });
        setfilteredCountries(newCountries);
    }, [countries]); 
    

  return (
    <>
        <h5>Country App: </h5>
        <h1>Country App</h1>
        <SearchCountry onSearch={handleSearch} />
        {isloading &&  <h2>Loading...</h2>}
        {error && <p>{error.message}</p>}
        {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry} />}
    
    </>
  )
}

export default CountryApp;
