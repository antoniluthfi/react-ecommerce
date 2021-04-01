import React, { useEffect } from 'react';
import AuthHelper from './AuthHelper';

const RegisterComplete = () => {
    const {
        input, setInput,
        registerHandleSubmit
    } = AuthHelper();

    const registerForm = () => (
        <form onSubmit={registerHandleSubmit}>
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