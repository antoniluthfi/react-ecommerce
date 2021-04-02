import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RegisterComplete from './pages/auth/RegisterComplete';
import ForgotPassword from './pages/auth/ForgotPassword';

import { auth } from './firebase';
import { useDispatch } from 'react-redux';

import Header from './components/nav/Header';

const  App = () => {
    const dispatch = useDispatch();

    // check firebase auth state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {
            if(user) {
                const idTokenResult = await user.getIdTokenResult();

                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: {
                        email: user.email,
                        token: idTokenResult.token
                    }
                })
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <ToastContainer hideProgressBar />
            <Header/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/register/complete' exact component={RegisterComplete} />
                <Route path='/forgot-password' exact component={ForgotPassword} />
            </Switch>
        </>
    );
}

export default App;