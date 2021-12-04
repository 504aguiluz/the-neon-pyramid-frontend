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
      <Logo />
      <Nav />

      <div className="bottom-container">
        <Menu />
        <Order />
      </div>
      {/* <LoginRegister /> */}
      {/* <Dish /> */}
      {/* <Payment /> */}
    </div>
  );
}

export default App;
