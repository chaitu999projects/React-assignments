import React from 'react'
import Form from './Components/FormValidation/Form'
import Navbar from './Components/Navbar'
import TodoList from './Components/TodoList/TodoList'
import Button from './Components/Buttons/Button'
import Props from './Components/PropsExersize/Props'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/todolist' element={<TodoList />} />
        <Route path='/buttons' element={<Button />} />
        <Route path='/props' element={<Props />} />
        <Route path='/contact' element={<Form/>}/>
      </Routes>
    </>
  )
}

export default App