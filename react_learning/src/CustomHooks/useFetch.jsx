import React, {useEffect, useState} from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch()
        .then((res) => {
            if(!res.ok){
                throw Error("fetch is not succesfull")
            } else{
                return res.json();
            }
        })
        .then((data)=> {
            setData(data);
            setIsLoading(false)
            setError(null);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false)
        })
        },[url]);

        return {data, isLoading, error};
}

export default useFetch;
