import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import  Create from "./crud/create";
import  MyFormbuild from "./crud/from";
import Signin from "./crud/signin";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/create" element={<Create/>} />
      <Route path="/about" element={<MyFormbuild />} />
      <Route path='/' element={<Signin></Signin>}></Route>
    </Routes>
  </Router>
  )
  }
export default App; 
