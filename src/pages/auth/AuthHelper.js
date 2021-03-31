import { useState } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const AuthHelper = () => {
    const [input, setInput] = useState({
        email: ''
    });

    const registerHandleSubmit = async e => {
        e.preventDefault();

        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true
        }

        // send auth to firebase
        await auth.sendSignInLinkToEmail(input.email, config);

        // send notification
        toast.success(
            `Email is sent to ${input.email}. Click the given link to complete your registration.`
        );

        // set email to localStorage in order the user won't be asked email again for verification
        localStorage.setItem('email-for-registration', input.email);

        // empty input state
        setInput({
            email: ''
        });
    }

    return {
        input, setInput,
        registerHandleSubmit, 
    }
}

export default AuthHelper;