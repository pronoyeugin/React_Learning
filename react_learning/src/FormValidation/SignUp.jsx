import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Style from './signup.module.css';

function SignUp() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(4, 'Name must have atleast 2 characters')
        .required('Name is required'),
      email: yup.string().email().required('Email is required'),
      password: yup
        .string()
        .min(6, 'Password must have atleast 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  const nameError = formik.touched.name && formik.errors.name && (
    <span style={{ color: 'red' }}>{formik.errors.name}</span>
  );

  const emailError = formik.touched.email && formik.errors.email && (
    <span style={{ color: 'red' }}>{formik.errors.email}</span>
  );

  const passwordError = formik.touched.password && formik.errors.password && (
    <span style={{ color: 'red' }}>{formik.errors.password}</span>
  );

  console.error(formik.errors);

  return (
    <>
      <h5>Form control with formik & Validation with yup </h5>
      <div className={Style.container}>
        <div className={Style.card}>
          <h2 className={Style.title}>User Sign Up</h2>
          <form onSubmit={formik.handleSubmit} className={Style.form}>
            <div className={Style.formGroup}>
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className={
                  formik.touched.email && formik.errors.email
                    ? Style.inputError
                    : ''
                }
              />
              <br />
              {nameError}
            </div>

            <div className={Style.formGroup}>
              <label htmlFor="">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className={
                  formik.touched.email && formik.errors.email
                    ? Style.inputError
                    : ''
                }
              />
              <br />
              {emailError}
            </div>

            <div className={Style.formGroup}>
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formik.values.email}
                onChange={formik.handleChange}
                className={
                  formik.touched.password && formik.errors.password
                    ? Style.inputError
                    : ''
                }
              />
              <br />
              {passwordError}
            </div>

            <button type="submit" className={Style.submitBtn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
