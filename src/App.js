import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import React, { useState } from 'react';

export const LoginStateContext = React.createContext();
export const dataStateContext = React.createContext();

const App = () => {

  const [accessToken, setAccessToken] = useState("Default");
  const [data, setData] = useState([]);

  return (
    <LoginStateContext.Provider value={{accessToken, setAccessToken}}>
      <dataStateContext.Provider value={{data, setData}}>
        <Router>
              <Routes>
                <Route path="/" element={<Home />}></Route> 
                <Route path="/login" element={<Login />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
              </Routes>
        </Router>
      </dataStateContext.Provider>
    </LoginStateContext.Provider>
  );
};

export default App;