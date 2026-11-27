import React,{useState} from 'react'
import User from './User';

const Users = () => {

  // const [userName, setUserName] = useState();
  // const [userId, setUserId] = useState();

  //Object pass 
  const [user, setUser] = useState({
      
      id: 10213467,
      name:"Pronoy Euign"
  });

  return (
    <>
        <h5>PropTypes | built-in type checking</h5>

        {/* <User userName={userName} userId={userId} /> */}

        {/*Object*/}
        <User user={user} />

      
    </>
  )
}

export default Users;
