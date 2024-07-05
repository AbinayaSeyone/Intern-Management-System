import React, {useState} from 'react';
import {gql, useMutation} from '@apollo/client';
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/LoginForm.css';
import {Link} from "react-router-dom";
import swal from "sweetalert";

const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(request: { username: $username, password: $password }) {
      token
      user {
        id
        userRole
        username
        emailId
    }
    }
  }
`;

const LoginForm = () => {
    // const history = useHistory();

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const [loginUser] = useMutation(LOGIN_USER);

    const validateForm = () => {
        const newValidation = {};

        if (!username) {
            newValidation.username = {
                isValid: false,
                message: 'Email Id is required.',
            };
        }


        if (!password) {
            newValidation.password = {
                isValid: false,
                message: 'Passwrod is required.',
            };
        }

        setValidation(newValidation);
        return Object.keys(newValidation).length === 0;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const isFormValid = validateForm();

        if (!isFormValid) {
            return;
        }

        try {
            // Call the mutation
            const {data} = await loginUser({
                variables: {username, password},
            });

            console.log('Login successful:', data.loginUser);
            const loginResponse = data.loginUser.user;
            // Reset the form after successful registration
            setUsername('');
            setPassword('');
            setErrorMessage('');

            if (data.loginUser.user.userRole == "COMPANY_USER") {
                // navigate('/companyC');

                const loginURL = `/CompanyHome?loginResponse=${encodeURIComponent(JSON.stringify(loginResponse))}`;
                window.location.href = loginURL;
            } else if (loginResponse.userRole === 'HiringManager_USER') {
                navigate('/hiringprocess1');
            } else {
                const loginURL = `/Intern?loginResponse=${encodeURIComponent(JSON.stringify(loginResponse))}`;
                window.location.href = loginURL;
            }


        } catch (error) {
            swal({
                title: "Failed!",
                icon: "error",
                button: "Enter"
            });

            console.error('Login error:', error);
            setErrorMessage('An error occurred during registration');
        }
    };

    const showValidationMessage = (fieldName) => {
        if (validation[fieldName] && !validation[fieldName].isValid) {
            return (
                <span
                    className="validation-error"
                    style={{color: 'red', fontSize: '12px'}}
                >
        {validation[fieldName].message}
      </span>
            );
        }
        return null;
    };

    return (
        <div className='wrapper  d-flex align-items-center justify-content-center w-100 '
             style={{height: "500px", width: "750px", borderRadius: '20px', borderInline: '10px', display: 'inline'}}>
            <div className='Login '>
                <h2 className="mb-3" style={{color: "#ffffff"}}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div
                        className={`form-group mt-2 mb-3 ${validation.password && !validation.password.isValid ? 'has-error' : ''}`}>
                        <label htmlFor="text" className="form-label" style={{color: "#ffffff"}}>User Name</label>
                        <input type="text" className="form-control"
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                        {showValidationMessage('username')}
                    </div>

                    <div
                        className={`form-group mt-2 mb-3 ${validation.password && !validation.password.isValid ? 'has-error' : ''}`}>
                        <label htmlFor="password" className="form-label" style={{color: "#ffffff"}}>Password</label>
                        <input type="password" className="form-control"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>

                        {showValidationMessage('password')}
                    </div>

                    {/*<div className='form-group form-check mb-2  '>*/}
                    {/*    <input type="checkbox" className="form-check-input"></input>*/}
                    {/*    <label htmlFor="check" className="form-check-label">Remember me</label>*/}
                    {/*</div>*/}
                    {/*<div><a href="#" class="card-link">forgot password</a>*/}

                    {/*</div>*/}
                    <button type='submit' className="btn btn-success w-30 mt-3 ">
                        Login
                    </button>
                </form>
                <Link to="/Register">
                    <button type='submit' className="btn btn w-100  mt-5" style={{backgroundColor: "#D2D8D8"}}>Create
                        Account as Intern
                    </button>
                </Link>
                <Link to="/RegisterC">
                    <button type='submit' className="btn btn w-100  mt-3" style={{backgroundColor: "#D2D8D8"}}>Create
                        Account as Company
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;
