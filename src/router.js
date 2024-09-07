import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./pages/Main/Main"
import About from "./pages/About/About"
import Works from "./pages/Works/Works"
import Study from "./pages/Study/Study"
import ToDoList from "./pages/Study/ToDoList/ToDoList"
import Netflix from "./pages/Study/Netflix/Netflix"

function router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works/>} />
            <Route path="/study" element={<Study/>}>
                <Route path="toDoList" element={<ToDoList/>} />
                <Route path="netflix" element={<Netflix/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default router
