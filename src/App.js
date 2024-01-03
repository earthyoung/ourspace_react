import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Home from './pages/home/Home';
import Post from './pages/post/Post';
import NewPost from './pages/newpost/NewPost';
import EditPost from './pages/editpost/EditPost';
import Group from './pages/group/Group';

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
                <Route path="/post" element={<Post />}></Route>
                <Route path="/post/new" element={<NewPost />}></Route>
                <Route path="/post/edit/:id" element={<EditPost />}></Route>
                <Route path="/groups" element={<Group />}></Route>
              </Routes>
        </Router>
      </dataStateContext.Provider>
    </LoginStateContext.Provider>
  );
};

export default App;