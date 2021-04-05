import React from 'react';
import AuthHelper from './AuthHelper';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const ForgotPassword = () => {
    const { 
        input, setInput,
        loading,
        forgotPasswordHandleSubmit,
    } = AuthHelper();

    const forgotPasswordForm = () => (
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

            <Button 
                type="primary" 
                className="mb-0 mt-3"
                block
                shape="round"
                icon={<LoginOutlined />}
                size="large"
                onClick={forgotPasswordHandleSubmit}
                disabled={!input.email}
            >Submit</Button>
        </form>
    )

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {loading ? <h4 className="text-danger">Loading...</h4> : <h4>Forgot Password</h4>}
                    {forgotPasswordForm()}
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;