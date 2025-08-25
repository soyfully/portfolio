import React from "react";
import Router from "./router";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Router />
    </BrowserRouter>
  )
}

export default App