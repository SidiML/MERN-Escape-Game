import { useState } from 'react'
import './App.css'
import Header from './components/header'
import {Route,Routes} from "react-router-dom"
import Home from './components/home'
import Booking from './components/booking'
import SignIn from './components/signin'
import Register from './components/register'


function App() {

  return (
      <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/booking/:id" element={<Booking/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
  )
}

export default App
