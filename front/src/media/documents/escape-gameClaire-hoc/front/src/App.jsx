import { useState } from 'react'
import './App.css'
import Header from './components/header'
import {Route,Routes} from "react-router-dom"
import Home from './components/home'
import Booking from './components/booking'
import SignIn from './components/signin'
import Register from './components/register'
import RequireAuth from './helpers/requireAuth'
import Logout from './components/logout'
import Historique from './components/historique'



function App() {

  return (
      <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<RequireAuth withAuth={false}><Home/></RequireAuth>}/>
            <Route path="/booking/:id" element={<RequireAuth withAuth={false}><Booking/></RequireAuth>}/>
            <Route path="/signin" element={<RequireAuth withAuth={false}><SignIn/></RequireAuth>}/>
            <Route path="/register" element={<RequireAuth withAuth={false}><Register/></RequireAuth>}/>
            <Route path="/historique" element={<RequireAuth withAuth={true}><Historique/></RequireAuth>}/>
            <Route path='/logout' element={<RequireAuth withAuth={false}><Logout/></RequireAuth>}/>
        </Routes>
      </div>
  )
}

export default App
