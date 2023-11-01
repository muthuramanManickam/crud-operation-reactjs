import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import groupone from "../assert/img/login.jpeg";
import * as yup from 'yup';
import { Formik, useFormik } from "formik";
import '/home/trainingbatchmarch2023/Documents/ReactJs/crud-operation/src/style/form.scss';

const MyFormbuild = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values, 'values');
  }

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema
  });

  return (
    <>
      <div className='form-main'>
        <div className="form-container">
          <form className='form-valid' onSubmit={formik.handleSubmit}>
            <div className='form-group'>
              <div className='login-form'>
                <div className='form-group'>
                  <label className='form-label required'>Email </label>
                  <span>:</span>
                  <div className='form-input'>
                    <Input
                      placeholder='Email'
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email? 
                    <div className='error'>{formik.errors.email}</div>:null }
                  </div>
                </div>
                <div className='form-group'>
                  <label className='form-label required'>Password </label>
                  <span>:</span>
                  <div className='form-input'>
                    <Input
                      placeholder='Password'
                      id='password'
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                    ) : null}
                  </div>
                </div>
                <Button className='form-btn' type='submit'>Login</Button>
              </div>
            </div>
          </form>
        </div>
        <div className='login-img'>
          <img
            alt="My Image"
            style={{ width: '50%', height: 'auto' }}
            className="my-image"
            src={groupone}
          />
        </div>
      </div>
    </>
  );
};

export default MyFormbuild;
