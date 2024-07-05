import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import {useNavigate} from "react-router-dom";

const REGISTER_COMPANY_USER = gql`
  mutation RegisterCompanyUser(
    $username: String!
    $emailId: String!
    $password: String!
    $mobileNo: String!
  ) {
    registerAsCompanyUser(
      request: {
        username: $username
        emailId: $emailId
        password: $password
        mobileNo: $mobileNo
      }
    ) {
      username
      emailId
      password
      mobileNo
    }
  }
`;

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [emailId, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [validation, setValidation] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const [registerUser] = useMutation(REGISTER_COMPANY_USER);

    const validateForm = () => {
        const newValidation = {};

        if (!username) {
            newValidation.username = {
                isValid: false,
                message: 'Enter company name.',
            };
        }

        if (!emailId) {
            newValidation.emailId = {
                isValid: false,
                message: 'Enter your email address.',
            };
        } else if (!isValidEmail(emailId)) {
            newValidation.emailId = {
                isValid: false,
                message: 'Enter a valid email address.',
            };
        }

        if (!mobileNo) {
            newValidation.mobileNo = {
                isValid: false,
                message: 'Enter a phone number.',
            };
        } else if (!isValidPhoneNumber(mobileNo)) {
            newValidation.mobileNo = {
                isValid: false,
                message: 'Enter a valid phone number.',
            };
        }

        if (!password) {
            newValidation.password = {
                isValid: false,
                message: 'Enter a password.',
            };
        }

        setValidation(newValidation);
        return Object.keys(newValidation).length === 0;
    };

    const isValidEmail = (email) => {
        // Add your email validation logic here
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidPhoneNumber = (phone) => {
        // Add your phone number validation logic here
        return /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isFormValid = validateForm();

        if (!isFormValid) {
            return;
        }

        try {
            // Call the mutation
            const { data } = await registerUser({
                variables: { username, emailId, password, mobileNo },
            });

            console.log('Registration successful:', data.registerAsCompanyUser);

            // Reset the form after successful registration
            setUsername('');
            setEmail('');
            setPassword('');
            setMobileNo('');
            setErrorMessage('');

            navigate('/login');


        } catch (error) {
            console.error('Registration error:', error);
            setErrorMessage('An error occurred during registration');
        }
    };

    const showValidationMessage = (fieldName) => {
        if (validation[fieldName] && !validation[fieldName].isValid) {
            return (
                <span
                    className="validation-error"
                    style={{ color: 'red', fontSize: '12px' }}
                >
        {validation[fieldName].message}
      </span>
            );
        }
        return null;
    };

    return (
        <div className="background-image1">
            <div className="container">
                <div className="row mt-lg-5"></div>
                <div className="row mt-lg-4"></div>
                <div className="row justify-content-center mt-lg-5">
                    <div className="col-md-4 mt-6" style={{  backgroundColor: "rgba(255,255,255, 0.1)", borderRadius: '15px', borderInline: '10px', display: 'inline' }}>
                        <form className="registrationForm" onSubmit={handleSubmit}>
                            <h2 style={{color:"#ffffff"}}>Create Account as Company</h2>
                            <div className={`mt-2 mb-3 ${validation.username && !validation.username.isValid ? 'has-error' : ''}`}>
                                <label htmlFor="username" style={{color:"#ffffff"}}>Company Name</label>
                                <input type="text" className="form-control" name="username" placeholder="Company Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                                {showValidationMessage('username')}
                            </div>

                            <div className={`mt-2 mb-3 ${validation.emailId && !validation.emailId.isValid ? 'has-error' : ''}`}>
                                <label htmlFor="emailId" style={{color:"#ffffff"}}>Email address</label>
                                <input type="email" className="form-control" name="emailId" placeholder="Email address" value={emailId} onChange={(e) => setEmail(e.target.value)} />
                                {showValidationMessage('emailId')}
                            </div>

                            <div className={`mt-2 mb-3 ${validation.mobileNo && !validation.mobileNo.isValid ? 'has-error' : ''}`}>
                                <label htmlFor="mobileNo" style={{color:"#ffffff"}}>Phone Number</label>
                                <input type="text" className="form-control" name="mobileNo" placeholder="Phone Number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
                                {showValidationMessage('mobileNo')}
                            </div>

                            <div className={`mt-2 mb-3 ${validation.password && !validation.password.isValid ? 'has-error' : ''}`}>
                                <label htmlFor="password" style={{color:"#ffffff"}}>Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                {showValidationMessage('password')}
                            </div>

                            {errorMessage && <div className="text-danger">{errorMessage}</div>}
                            <div className="col-md-4 mb-2" >
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
