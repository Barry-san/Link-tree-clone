import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/fconfig' 
import { useEffect, useState } from 'react'

function App() {
  const [User, setUser] = useState('')
  useEffect(()=>{
    console.log(User)
    onAuthStateChanged(auth, (user)=>{
      if (user){
        localStorage.setItem("user", JSON.stringify(user))
        setUser("user")
      }
      else{
        console.log('No user logged in');
        setUser('')
      }
    })
  }, [User])
  
  return (
    <BrowserRouter>
      <Navbar user="User" ></Navbar>
    <div className="App bg-slate-800 h-screen grid place-items-center">
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        {User? 
        <Route path='/' element={<Dashboard/>}></Route>
         :
        <Route path='/' element= {<Landing/>}></Route>
      }
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
