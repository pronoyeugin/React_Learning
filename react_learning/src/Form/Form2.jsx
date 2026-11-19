import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Style from './form.module.css';

function Form2() {

  const [user, setUser] = useState({name:'', email:'', password:''  });
  const {name, email, password} = user

  const handleChange =(e) => {
     setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
    console.log(user);
  };

  return (
    <>
      <h2> useState with Object Example</h2>
      <div className={Style.parentDiv}>
        <h4>Registration</h4>
        <form action="" onSubmit={handleSubmit}>
          <div className={Style.formGroup}>
            <label className={Style.label} htmlFor="name">
              Name:{' '}
            </label>
            <input
              className={Style.input}
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={Style.formGroup}>
            <label className={Style.label} htmlFor="email">
              Email:{' '}
            </label>
            <input
              className={Style.input}
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={Style.formGroup}>
            <label className={Style.label} htmlFor="password">
              Password:{' '}
            </label>
            <input
              className={Style.input}
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={Style.formGroup}>
            <Button className={Style.btn} type="submit">
              Register
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Form2;
