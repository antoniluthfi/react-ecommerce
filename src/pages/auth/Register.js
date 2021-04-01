import React from 'react';
import AuthHelper from './AuthHelper';

const Register = () => {
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
                onChange={e => setInput({
                    ...input, email: e.target.value
                })} 
                placeholder="Insert Email Address"
                autoFocus
            />

            <button type="submit" className="btn btn-raised mt-3">REGISTER</button>
        </form>
    );

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    {registerForm()}
                </div>
            </div>
        </div>
    )
}

export default Register;