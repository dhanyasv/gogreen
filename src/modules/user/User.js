import React, { useEffect, useState } from 'react'
import UserLoginForm from './UserLoginForm';

function User(props) {
    const [userstate,setUserState] = useState(false);
    const getUserStatus = (user) => {
        setUserState(user)
    }
    useEffect(() => {
        props.getstatus(userstate)
    },[userstate])
    return (
        <>
            {userstate ? 'Welcome Dhanya' : <UserLoginForm setUserStatus={getUserStatus}/> }
        </>
    )
}

export default User
