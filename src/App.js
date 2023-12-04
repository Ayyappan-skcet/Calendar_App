import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Signup from './component/signup';
import Signin from './component/signin'
import Home from './component/home/home'
import Todo from './component/todo/todo'
import Event from './component/event/event'
import Profile from './component/profile/profile'
import Year from './component/yearly/year'
const App = () => {
  return (
    <>
  
    <Routes>
    <Route path='/' element={<Signup/>}/>
   <Route path='/signin' element={<Signin/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/todo' element={<Todo/>}/>
    <Route path='/event' element={<Event/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/year' element={<Year/>}/>
    </Routes>
  
    </>
  )
};

export default App