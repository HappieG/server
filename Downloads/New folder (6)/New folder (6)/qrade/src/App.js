import React, { useState } from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Dash from './components/dash';


function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
      <Routes>


      <Route path='/' exact element={<Home/>}/>
      <Route path='/register' exact element={<Register/>}/>
      <Route path='/login' exact element={<Login setUser={setUser} />}/>
      <Route path='/dash' exact element={<Dash user={user}/>}/>

      </Routes>
      </Router>


    </div>
  );
}

export default App;
