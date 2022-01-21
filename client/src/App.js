import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import { Container} from "react-bootstrap"

function App() {


  return (
      <BrowserRouter>
      <div className="App bg-clr-dark">
      <Container fluid style={{height:"100vh",padding:"0px" ,}}>
       <Routes>
         <Route path="/" exact element={<Home />}></Route>
         <Route path="/auth" element={<Auth />}></Route>
       </Routes>
      </Container>
      </div>
      </BrowserRouter>
  );
}

export default App;
