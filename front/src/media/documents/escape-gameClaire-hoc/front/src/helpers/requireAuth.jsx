import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import { Navigate } from 'react-router-dom'

export default function RequireAuth({children, withAuth}) {
    const {user, setUser} = useContext(UserContext)
    const [redirect,setRedirect] = useState(false)

    useEffect(()=>{
        const token = window.localStorage.getItem('escape-key')

        if(token !== null ){
            fetch('http://localhost:4000/checkToken', {
                method : 'GET',
                headers: {authorization : token}
            })
            .then((response)=>{
                return response.json()
            })
            .then((res)=>{
                console.log(res)
                if(res.status === 200){
                    setUser({
                        isLogged: true,
                        infos : res.user
                    })
                } else {
                    setRedirect(true)
                }
            })
        } else {
            if(withAuth){
                setRedirect(true)
            }
        }

    }, [])

    console.log(user)
    if(redirect){
        return <Navigate to='/signin'/>
    }
 
  return (
    <>
        {children}
    </>
  )
}
