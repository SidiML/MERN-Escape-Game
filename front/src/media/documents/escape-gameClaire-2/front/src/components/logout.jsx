import React, { useEffect,useState } from 'react'
import { UserContext } from '../context/userContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

export default function Logout() {

    const {user, setUser} = useContext(UserContext)
    const [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        window.localStorage.removeItem('escape-key')
        setUser({
            isLogged:false,
            infos : null
        })
        setRedirect(true)
    },[])

    if(redirect){
        return <Navigate to="/"/>
    }

  return (
    <div>logout</div>
  )
}
