import './App.css';
import React, { Component } from 'react';
// import LoginRegister from './components/LoginRegister';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Menu from './components/Menu';
// import Dish from './components/Dish';
import Order from './components/Order';
// import Payment from './components/Payment';


let baseUrl = process.env.REACT_APP_BASEURL

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      email: '',
      phone_num: '',
      address: '',
      payment_info: {},
      userLoggedIn: false,
      modalOpen: false,
      orders: [],
      orderToBeEdited: {},
      dishes: [],
    }
  }

  getDishes = () => {
    // console.log('hit getDishes')
    fetch(baseUrl + '/dishes/', {
      credentials: 'include'
    })
    .then (res => {
      if(res.status === 200) {
        console.log('🥡 fetch index dishes successful! 🥡')
        return res.json()
      } else {
        console.log('fetch index dishes failed...💣')
        return[]
      }
    })
    .then(data => {
      console.log('data: ' + data)
      this.setState({
        dishes: data.data
      })
      console.log('new data: ' + data)
    })
  } 

  componentDidMount(){
    this.getDishes()
  }
  
  render(){

    // this.getDishes()

    return (
      <div className="App">
      <Logo />
      <Nav />

      <div className="bottom-container">
        <Menu 
          dishes = {this.state.dishes}
        />
        <Order />
      </div>
      {/* <LoginRegister /> */}
      {/* <Dish /> */}
      {/* <Payment /> */}
    </div>
    );
  }
}

export default App;
