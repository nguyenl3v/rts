import React, { FC } from 'react';
import './App.css';
import Register from "./components/register/Index";
import Header from "./components/header/Index";
import Login from "./components/login/Index";
import { Route } from 'react-router-dom';

const App: FC = () => {
  
  return (
    <div className="App">
      <Route exact path="/" component={Header} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
