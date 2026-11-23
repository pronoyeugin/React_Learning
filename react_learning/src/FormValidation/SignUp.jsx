import React from 'react'
import { useFormik } from 'formik';


function SignUp() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit:(values, { resetForm }) => {
            console.log(values);
            resetForm();
        }
    });


  return (
    <>
        <h4> User Sign Up </h4>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" 
                    name="name" 
                    id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange} />
            </div>

            <div>
                <label htmlFor="">Email:</label>
                <input type="email"
                    name="email"
                    id="email"
                    values={formik.values.email}
                    onChange={formik.handleChange}
                />
            </div>

            <div>
                <label htmlFor="">Password:</label>
                <input type="password"
                    name="password"
                    id="password"
                    values={formik.values.email}
                    onChange={formik.handleChange}
                />
            </div>

            <button type="submit">Sign Up</button>
        </form>
        
    </>
  )
}

export default SignUp;
