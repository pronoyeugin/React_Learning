import React from 'react'
import PropTypes from 'prop-types';


const User = (props) => {

  return (
    <>
        {/* <h1>{props.userName}</h1>
        <h3>{props.userId}</h3> */}

        <h2>{props.user.name}</h2>
        <h2>{props.user.id}</h2>
    </>
  )
};

User.propsTypes = {
    //key value
    userName: PropTypes.string,
    userId: PropTypes.number,
};

{/* Object propstype */}
User.propsTypes = {
    //key value
    user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    }),
};


export default User;
