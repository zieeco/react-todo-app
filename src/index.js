import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './functionBased/pages/About'
import NotMatch from "./functionBased/pages/NotMatch"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<TodoContainer />} />
      <Route  path="/About" element={<About />} />
      <Route  path="*" element={<NotMatch />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
