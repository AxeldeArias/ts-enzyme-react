import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom';

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import {  startLoadingNotes } from '../actions/note';
import { PrivateRoute } from '../routers/PrivateRoute'
import { PublicRoute } from '../routers/PublicRoute'

export const AppRouter = () => {
    const dispatch = useDispatch()

    const [checking, setChecking] = useState<boolean>(true);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    
    useEffect( () => {
        firebase.auth().onAuthStateChanged(async (user)=>{
            if(user?.uid){
                dispatch(login(user.uid, user.displayName || ""));
                dispatch(startLoadingNotes());
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
            setChecking(false);
        })
    }, [dispatch])

    if( checking ){
        return (
            <h1>Wait...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact
                        isAuthenticated={isLoggedIn}
                        component={AuthRouter}
                        path="/auth/login"
                    />
                    
                    <PrivateRoute 
                        exact
                        isAuthenticated={isLoggedIn}
                        component={JournalScreen}
                        path="/"
                    />
                </Switch>
            </div>
        </Router>
    )
}
