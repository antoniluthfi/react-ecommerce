import React from 'react';
import AuthHelper from './AuthHelper';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const Register = () => {
    const {
        input, setInput,
        registerHandleSubmit
    } = AuthHelper();

    const registerForm = () => (
        <form>
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

            <Button 
                type="primary" 
                className="mb-3 mt-3"
                block
                shape="round"
                icon={<LoginOutlined />}
                size="large"
                onClick={registerHandleSubmit}
                disabled={!input.email}
            >Register</Button>
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