import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import * as yup from 'yup';
import { Formik, useFormik } from "formik";


function Signin() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        dateOfBirth: '',
        gender: 'male',
        contactNumber: '',
    });
    const onSubmit = (values) => {
        console.log(values);
    }
    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email address').required('Email is required'),

    });
    const formik = useFormik({
        formData: formData,
        onSubmit: onSubmit,
        validationSchema: validationSchema
    });





    return (
        <div className='main-area' >
            <form onSubmit={formik.handleSubmit}>
                <div className='sign-form'>
                    <h2 className='main-head'>Sign Up</h2>
                    <div className='form-group'>
                        <label className='form-label required' htmlFor="username">Username</label>
                        <span>:</span>
                        <div className='form-input'>
                            <Input
                                type="text"
                                id="username"
                                name="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                required
                            />
                            {formik.touched.username && formik.errors.username ?
                                <div className='error'>{formik.errors.username}</div> : null}
                        </div>
                    </div>

                    <div className='form-group'>
                        <label className='form-label required' htmlFor="email">Email</label>
                        <span>:</span>
                        <div className='form-input'>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                required
                            />
                            {formik.touched.email && formik.errors.email ?
                                <div className='error'>{formik.errors.email}</div> : null}
                        </div>

                    </div>
                    <div className='form-group'>
                        <label className='form-label required' htmlFor="dateOfBirth">Date of Birth</label>
                        <span>:</span>
                        <div className='form-input'>
                            <Input
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={formik.values.dateOfBirth}
                                onChange={formik.handleChange}
                                required
                            />
                            {formik.touched.dateOfBirth && formik.errors.dateOfBirth ?
                                <div className='error'>{formik.errors.dateOfBirth}</div> : null}
                        </div>
                    </div>

                    <div className='form-group'>
                        <label className='form-label required' >Gender</label>
                        <span>:</span>
                        <div className='form-input'>
                            <select
                                name="gender"
                                value={formik.values.gender}
                                onChange={formik.handleChange}
                                className='input-section'
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {formik.touched.gender && formik.errors.gender ?
                                <div className='error'>{formik.errors.gender}</div> : null}
                        </div>
                    </div>

                    <div className='form-group'>
                        <label className='form-label required' htmlFor="contactNumber">Contact Number</label>
                        <span>:</span>
                        <div className='form-input'>
                            <Input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                value={formik.values.contactNumber}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.contactNumber && formik.errors.contactNumber ?
                                <div className='error'>{formik.errors.contactNumber}</div> : null}
                        </div>
                    </div>

                    <div className=' form-group-btn'>
                        <Button className='form-btn' type="submit">Sign Up</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signin;
