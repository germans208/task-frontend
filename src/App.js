import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={<Login />} />
        <Route path="new-account" component={<NewAccount />} />
        <Route path="projects" component={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
