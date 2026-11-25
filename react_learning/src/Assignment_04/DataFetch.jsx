import React,{useState, useEffect} from 'react'
import Users from './Users';

const DataFetch = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

  
    useEffect(() =>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if(!res.ok){
          throw new Error("Failed to fetch data!")
        }else{
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error)=>{
        setError(error.message);
        setIsLoading(false);
      })
    }, [])

    const loadingMessage = <p>Data is Loading...</p>

  return (
    <>
      <h5>Assignment-04 : Fetch Data from APi</h5>
        {data && <Users users={data} />}
        {isLoading  && loadingMessage}
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}

export default DataFetch;
