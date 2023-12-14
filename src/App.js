import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginGoogle from './pages/components/LoginGoogle';
import Logout from './pages/components/Logout';
import React, { useState } from 'react';
import "./App.css"

export const LoginStateContext = React.createContext();
export const dataStateContext = React.createContext();

const App = () => {

  const [login, setLogin] = useState(false);
  const [id, setId] = useState(null);
  const [email, setEmail] = useState("익명");
  const [data, setData] = useState([]);

  return (
    <LoginStateContext.Provider value={{login, setLogin, id, setId, email, setEmail}}>
      <dataStateContext.Provider value={{data, setData}}>
        <Router>
              <Routes>
                <Route path="/" element={<Home />}></Route> 
              </Routes>
        </Router>
      </dataStateContext.Provider>
    </LoginStateContext.Provider>
  );
};

export default App;