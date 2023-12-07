import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import React, { useState } from 'react';

export const LoginStateContext = React.createContext();

const App = () => {

  const [accessToken, setAccessToken] = useState("Default");

  return (
    <LoginStateContext.Provider value={{accessToken, setAccessToken}}>
      <Router>
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/" element={<Login />}></Route>
            </Routes>
      </Router>
    </LoginStateContext.Provider>
  );
};

export default App;