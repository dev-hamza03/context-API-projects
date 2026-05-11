import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'


const Profile = () => {

    const { user } = useContext(UserContext)

    if (!user) return(

        <div> Plaese Login</div >
    )

    else return <div>Welcome {user.username}. Your password is {user.password}</div>


}

export default Profile
