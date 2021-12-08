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
      dishes: [],
      currentOrder: {},
      currentOrderId: null,
    }
  }

  register = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch(baseUrl + '/users/register', {
        method: 'POST',
        body: JSON.stringify({
          email: e.target.email.value,
          username: e.target.username.value,
          password: e.target.password.value,
          phone_num: e.target.phone_num.value,
          address: e.target.address.value,
          payment_info : {
            cc_num: e.target.payment_info.cc_num.value,
            cc_exp: e.target.payment_info.cc_exp.value,
            cc_sec_code: e.target.payment_info.cc_sec_code.value,
          }
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.status === 200) {
        this.getDishes()
        // this.getOrders()
      }
    }
    catch(err) {
      console.log('Error => ', err)
      console.log('😖 register failed 😖')
    }
  }

  loginUser = async (e) => {
    e.preventDefault()
    const loginBody = {
      username: e.target.username.value,
      password: e.target.password.value,
    }

    try {
      const response = await fetch(baseUrl + 'users/login', {
        method: 'POST',
        body: JSON.stringify(loginBody),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })

      console.log(response)
      console.log('BODY: ', response.body)

      if(response.status === 200){
        this.getDishes()
        // this.getOrders()
        console.log('🥳 login successful! 🥳')
        this.setState({
          // need to populate the rest of state for users
          username: e.target.username.value,
          password: e.target.password.value,
          userLoggedIn: true,
          })
      }
    }
    catch(err){
      console.log('Error => ', err)
      console.log('😖 login failed 😖')
    }
  }

  logoutUser = () => {
    console.log('hit logout button')
    fetch(baseUrl + '/users/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(res => {
      console.log(res.status)
      console.log('🧨 logout successful! 🧨')
      this.setState({
        userLoggedIn: false
      })
    })
    console.log(this.state)
  }

  getDishes = () => {
    console.log('hit getDishes')
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

  newOrder = async () => {
    console.log('hit newOrder')

    try{
      const response = await fetch(baseUrl + '/orders/', {
        method: 'POST',
        body: JSON.stringify({
          total: 0.0,
        }),
        headers: {
          'Content-Type': 'application/json'
        }, 
        credentials: 'include'
      })
      
      console.log(response.status)

      if(response.status === 201){
        console.log('new order created!')
        const newOrder = await response.json()
        console.log('new order :' + newOrder)
        const copyOrders = [...this.state.orders]
        copyOrders.push(newOrder)
        this.setState({
          orders: copyOrders,
          currentOrderId: newOrder.id,
          currentOrder: newOrder,
        })
      }
    }
    catch(err){
      console.log('Error -> ', err)
      console.log('order not created...')
    }

  }

  addDishToOrder =(dish_id)=> {
    console.log('dish id: ' + dish_id,'order id :' + this.currentOrderId)
    
    if(this.currentOrderId === undefined){
      this.newOrder()
      console.log('order created: ' + this.state.currentOrder)
    } else {
      console.log('existing order: ' + this.state.currentOrder)
    }
      const copyOrders = [...this.state.orders]
      const dishToAdd = this.state.dishes.find(dish => dish.dish_id === dish_id)
      console.log(dishToAdd)
      copyOrders.push(dishToAdd)
      this.setState({
        orders: copyOrders,
        currentOrder: copyOrders[copyOrders.length -1],
      })
      console.log('current order: ' + this.state.currentOrder)

  }

  componentDidMount(){
    this.getDishes()
  }
  
  render(){

    
    return (
      <div className="App">
      <Logo />
      <Nav />

      <div className="bottom-container">
        <Menu 
          dishes = {this.state.dishes}
          newOrder = {this.newOrder}
          addDishToOrder = {this.addDishToOrder}
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
