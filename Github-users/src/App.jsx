import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import './App.css'
import Githubusers from './Githubusers'
import GithubusersProvider from './GithubusersProvider';
import GithubusersTable from './GithubusersTable';

function App() {
  

  return (
    <GithubusersProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cards" element={<Githubusers/>}/>
          <Route path="/table" element={<GithubusersTable/>}/>
        </Routes>
      </Router>
     
    </GithubusersProvider>
  );
}

export default App;
