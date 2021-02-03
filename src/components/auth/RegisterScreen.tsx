import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui'
import { storeType } from '../../store/store';
import { uiStateTypes } from '../../reducers/uiReducer';
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

type formType = {
    name: string,
    email: string,
    password: string,
    password2: string,
}

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const {msgError} = useSelector<storeType, uiStateTypes>(state => state.ui)

    const [{name,email,password,password2},handleInputChange] = useForm({name:"",email:"",password:"",password2:""})

    const handleRegister = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(name, email, password));
        }
    }

    const isFormValid = () => {
        let error = ""
        if(name.trim().length === 0){
            error ="Name is required";
        }else if(!validator.isEmail(email)){
            error = "Email is not valid";
        }else if(password !== password2 || password.length < 5){
            error ="Password should be at least 5 characters and match each other"
        } 
        if(error){
            dispatch(setError(error))
            return false;
        }
        dispatch(removeError())
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            {msgError && (
                <div className={"auth__alert-error"}>
                    { msgError }
                </div>
            )}

            <form onSubmit={handleRegister}>

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    className="auth__input"
                    autoComplete="off"
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    className="auth__input"
                    autoComplete="off"
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    className="auth__input"
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    className="auth__input"
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
