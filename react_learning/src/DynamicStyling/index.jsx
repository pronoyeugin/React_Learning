import React,{useEffect, useState} from 'react'


const DynmicStyle = () => {

    const error = true;
    
    const [name, setName] = useState('');
    const [validInput, setValidInput] = useState(false);

    useEffect(() => {
         if(name.length < 3 ) {
            setValidInput(false);
        }else{
            setValidInput(true);
        }
    },[name])

    const handleChange = (e) => {
        setName(e.target.value);
    }

  return (
    <>  
        <h5>Dynamic Style Guide</h5>
        <div clasName="App">
            <h1 style={{color:error ? 'red': 'green', backgroundColor: error ? 'black' : 'yellow'}}>Welcome</h1>
        </div>

        {/* <div>
            <label>First Name:</label>
            <input 
                type="text" 
                name="name"
                value={name}
                onChange={handleChange}
                style={{backgroundColor:validInput ? 'green':'red' }}
            />
        </div> */}

        <div>
            <label>Last Name:</label>
            <input 
                type="text" 
                name="name"
                value={name}
                onChange={handleChange}
                // className={`${validInput ? 'valid': 'invalid'}`}
                className={`${validInput && 'valid'}`}
            />
        </div>
    </>
  )
}

export default DynmicStyle;
