import React, { FC } from 'react';
import './App.css';
import Register from "./components/register/Index";
import Header from "./components/header/Index";

const App: FC = () => {
  
  return (
    <div className="App">
      <Register />
      <Header />
    </div>
  );
}

export default App;
