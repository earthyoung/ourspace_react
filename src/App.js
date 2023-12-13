import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginGoogle from './pages/LoginGoogle';
import Logout from './pages/Logout';
import React, { useState } from 'react';

export const LoginStateContext = React.createContext();
export const dataStateContext = React.createContext();

const App = () => {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState([]);

  return (
    <LoginStateContext.Provider value={{login, setLogin}}>
      <dataStateContext.Provider value={{data, setData}}>
        <Router>
              <Routes>
                <Route path="/" element={<Home />}></Route> 
                <Route path="/login/google" element={<LoginGoogle />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
              </Routes>
        </Router>
      </dataStateContext.Provider>
    </LoginStateContext.Provider>
  );
};

export default App;