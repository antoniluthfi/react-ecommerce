import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AuthHelper from './AuthHelper';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const RegisterComplete = () => {
    const {
        route, 
        isLoggedIn,
        input, setInput,
        completeRegisterHandleSubmit
    } = AuthHelper();

    const registerForm = () => (
        <form>
            <div className="form-group">
                <input 
                    type="email" 
                    className="form-control" 
                    value={input.email} 
                    placeholder="Insert Email Address"
                    disabled
                />
            </div>

            <div classNam="form-group">
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
            </div>

            <Button 
                type="primary" 
                className="mb-3 mt-3"
                block
                shape="round"
                icon={<LoginOutlined />}
                size="large"
                onClick={completeRegisterHandleSubmit}
                disabled={!input.email || !input.password}
            >Complete Registration</Button>
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