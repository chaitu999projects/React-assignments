import React from 'react'
import Form from './Components/FormValidation/Form'
import Navbar from './Components/Navbar'
import TodoList from './Components/TodoList/TodoList'
import Button from './Components/Buttons/Button'
import Props from './Components/PropsExersize/Props'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './Components/404Page/PageNotFound'
import Toggle from './Components/FunctionalComp/Toggle'
import TodoListFun from './Components/FunctionalComp/TodoListFun'

function App() {
  return (
    <>

     <Navbar />
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/todolist' element={<TodoList />} />
        <Route path='/buttons' element={<Button />} />
        <Route path='/props' element={<Props />} />
        <Route path='/toggle' element={<Toggle />} />
        <Route path='/todolistfunctioncom' element={<TodoListFun />}/>
        <Route path='/*' element={<PageNotFound />}/>
      </Routes>
    </>
  )
}

export default App