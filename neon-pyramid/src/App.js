import './App.css';
import React from 'react';
import LoginRegister from './components/LoginRegister';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Dish from './components/Dish';
import Order from './components/Order';
import Payment from './components/Payment';


function App() {
  return (
    <div className="App">
      <LoginRegister />
      <Logo />
      <Nav />
      <Menu />
      <Dish />
      <Order />
      <Payment />
    </div>
  );
}

export default App;
