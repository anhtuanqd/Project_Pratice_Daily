import { Button } from 'antd'
import { FastField, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import popup from '../../common/popup/popup'
import InputField from './InputField'
import './register.scss'
const Register = (props) => {
    console.log('form register')
    const user = {
        username: '',
        name: '',
        email: '',
        password: '',
        comfirmpassword: ''
    }
    const SignupSchema = Yup.object().shape({
        username: Yup.string().required('This field is required'),
        name: Yup.string().required('This field is required'),
        email: Yup.string()
            .email('Invalid email')
            .required('This field is required'),
        password: Yup.string().required('This field is required'),
        comfirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('This field is required')
    })
    const handleRegister = async (values) => {
        try {
            console.log(values)
            popup('Register', 'Registered Successfully', 'success')
        } catch (err) {
            popup('Register', `${err}`, 'error')
        }
    }

    return (
        <div className="register">
            <Formik
                initialValues={user}
                validationSchema={SignupSchema}
                onSubmit={(values) => handleRegister(values)}
            >
                {(formikProps) => {
                    return (
                        <Form className="form">
                            <h2>SIGN UP</h2>
                            <FastField
                                name="username"
                                component={InputField}
                                label="Username"
                                placeholder="Enter your username ..."
                            />
                            <FastField
                                name="name"
                                component={InputField}
                                label="Name"
                                placeholder="Enter your Name ..."
                            />
                            <FastField
                                name="email"
                                component={InputField}
                                label="Email"
                                placeholder="Enter your email ..."
                            />
                            <FastField
                                name="password"
                                component={InputField}
                                label="Password"
                                placeholder="Enter your password ..."
                                type="password"
                            />
                            <FastField
                                name="comfirmpassword"
                                component={InputField}
                                label="ComfirmPassword"
                                placeholder="Enter comfirmpassword ..."
                                type="password"
                            />
                            <Button type="primary" htmlType="submit">
                                Sign up
                            </Button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Register
