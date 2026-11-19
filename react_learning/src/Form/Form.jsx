import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Style from './form.module.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log('Submited');
    let userInfo = {
      name,
      email,
      password,
    };
    console.log(userInfo);

    e.preventDefault();
  };

  return (
    <>
      <h2> Controlled Component Example</h2>
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
              onChange={handleNameChange}
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
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
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
export default Form;
