import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
const App = () => {
  return (

    <div>
       <BrowserRouter>
       <Routes>
       <Routes path='/'element={<Home/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App