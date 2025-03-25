import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import './App.css'
import IncrementAge from './pages/IncrementAge'
import NameAge from './pages/NameAge'
import Navbar from './components/Navbar'
import Todo from './pages/Todo'
import Array from './pages/Array'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
        <Routes>
          <Route path='/increment_age' element={<IncrementAge/>}/>
          <Route path='/name_age' element={<NameAge/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/array' element={<Array/>}/>
        </Routes>
    </>
  )
}

export default App
