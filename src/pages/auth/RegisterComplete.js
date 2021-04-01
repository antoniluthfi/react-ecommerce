import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AuthHelper from './AuthHelper';

const RegisterComplete = () => {
    const {
        route, 
        isLoggedIn,
        input, setInput,
        completeRegisterHandleSubmit
    } = AuthHelper();

    const registerForm = () => (
        <form onSubmit={completeRegisterHandleSubmit}>
            <input 
                type="email" 
                className="form-control" 
                value={input.email} 
                placeholder="Insert Email Address"
                disabled
            />

            <input 
                type="password" 
                className="form-control" 
                value={input.password} 
                onChange={e => setInput({
                    ...input, password: e.target.value
                })} 
                placeholder="Insert Password"
                autoFocus
            />

            <button type="submit" className="btn btn-raised mt-3">Complete Registration</button>
        </form>
    );

    useEffect(() => {
        setInput({
            ...input, email: localStorage.getItem('email-for-registration')
        });
    }, []);

    return (
        <div className="container p-5">
            {localStorage.getItem('email-for-registration') || !isLoggedIn ? null : <Redirect to={route} />}
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Complete Registration</h4>
                    {registerForm()}
                </div>
            </div>
        </div>
    )
}

export default RegisterComplete;