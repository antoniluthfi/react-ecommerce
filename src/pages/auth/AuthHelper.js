import { useState } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const AuthHelper = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [route, setRoute] = useState('/');
    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const registerHandleSubmit = async e => {
        e.preventDefault();

        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true
        }

        if(input.email != '') {
            // send auth to firebase
            await auth.sendSignInLinkToEmail(input.email, config);
    
            // send notification
            toast.success(
                `Email is sent to ${input.email}. Click the given link to complete your registration.`
            );
        } else {
            toast.error(
                'Email can not be empty!'
            );
        }

        // set email to localStorage in order the user won't be asked email again for verification
        localStorage.setItem('email-for-registration', input.email);

        // empty input state
        setInput({
            email: ''
        });
    }

    const completeRegisterHandleSubmit = async e => {
        e.preventDefault();

        let message = null;
        if(!input.email) message = 'Email is required!';
        else if(!input.password) message = 'Password is required!';

        if(message) {
            toast.error(message);
            return;
        }

        try {
            const result = await auth.signInWithEmailLink(input.email, window.location.href);

            if(result.user.emailVerified) {
                setIsLoggedIn(true);

                // remove user email from localStorage
                localStorage.removeItem('email-for-registration');

                // update user password get user id token
                let user = auth.currentUser;
                await user.updatePassword(input.password);
                const idTokenResult = await user.getIdTokenResult();

                // redux store
                console.log('user', user);
                console.log('idTokenResult', idTokenResult);

                // redirect
                setRoute('/login');
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return {
        route, 
        isLoggedIn,
        input, setInput,
        registerHandleSubmit, 
        completeRegisterHandleSubmit
    }
}

export default AuthHelper;