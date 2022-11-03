import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <div className="App bg-slate-800 h-screen grid place-items-center">
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
