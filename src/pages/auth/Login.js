import React from 'react';
import AuthHelper from './AuthHelper';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const Login = () => {
    const {
        input, setInput,
        isLoggedIn,
        route,
        loginHandleSubmit
    } = AuthHelper();

    const loginForm = () => (
        <form>
            <div className="form-group">
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
            </div>

            <div className="form-group">
                <input 
                    type="password" 
                    className="form-control" 
                    value={input.password} 
                    onChange={e => setInput({
                        ...input, password: e.target.value
                    })} 
                    placeholder="Insert Password"
                />
            </div>

            <Button 
                type="primary" 
                className="mb-3 mt-3"
                block
                shape="round"
                icon={<LoginOutlined />}
                size="large"
                onClick={loginHandleSubmit}
                disabled={!input.email || !input.password}
            >Login</Button>
        </form>
    );

    return (
        <div className="container p-5">
            {!isLoggedIn ? null : <Redirect to={route} />}
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Login</h4>
                    {loginForm()}
                </div>
            </div>
        </div>
    )
}

export default Login;