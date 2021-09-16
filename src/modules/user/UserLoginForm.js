import React, { useState , useReducer, createRef, useRef, useEffect } from 'react';
import './UserLoginForm.css';
import Login from './Login';

function UserLoginForm(props) {
    const userReducer = (state,action) => {
        let type = action.type;
        switch(type) {
            case 'fields':
                return {
                    ...state,
                    [action.filedname]:action.payload,
                    formError:'',
                    loadingUser:false
                }
            case 'login':
                return {
                    ...state,
                    formError:'',
                    loadingUser:true,
                    userStatus:false
                }
             case 'success':
                return {
                    ...state,
                    formError:'',
                    loadingUser:false,
                    userStatus:true
                }
             case 'error':
                return {
                    ...state,
                    formError:'Incorrect Username',
                    loadingUser:false,
                    userStatus:false
                }  
            case 'logout':
                return {
                    ...state,
                    formError:'',
                    loadingUser:false,
                    userStatus:false
                }  
            default:
                return state;
        }
        

    }
    const initState = {
        userStatus:false,
        loadingUser:false,
        userName:'',
        userPassword:'',
        formError:''
    }
    
    const onSubmit = async (event) => {
        event.preventDefault();
        dispatch({type:"login"})
        try{
            await Login(userName,userPassword)
            dispatch({type:"success"})                      
        } catch {
            dispatch({type:"error"})
            refEl.current.focus()
            console.log(refEl)
        }
        
    }
    const [state,dispatch] = useReducer(userReducer,initState)
    const {userStatus,loadingUser,userName, userPassword, formError} = state;
    const refEl = useRef(null)
    useEffect(() => {
        props.setUserStatus(userStatus) 
    },[userStatus])
    return (
        <div className="user-loginform">
            <h3>User Login</h3>
            <form className="loginform" onSubmit={(event) => onSubmit(event)}>
                <label>Name</label>
                <input type="text" ref={refEl} name="name" value={userName} onChange={(e) => dispatch({
                    type:'fields',
                    filedname:'userName',
                    payload:e.target.value
                })}/>
                <label>Password</label>
                <input type="password" name="password" value={userPassword} onChange={(e) => dispatch({
                    type:'fields',
                    filedname:'userPassword',
                    payload:e.target.value
                })} />
                <button type="submit"  disabled={loadingUser} >{loadingUser ? 'Logging In' : 'LOGIN'}</button>
                {formError && <p> { formError}</p>}
            </form>
        </div>
    )
}

export default UserLoginForm
