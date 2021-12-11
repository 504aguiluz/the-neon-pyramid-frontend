import './App.css';
import React, { Component } from 'react';
import Register from './components/Register';
import Login from './components/Login';
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
      registerOpen: false,
      loginOpen: false,
      orderOpen: false,
      paymentOpen: false,
      // orders: [],
      dishes: [],
      // currentOrder: {},
      orderedDishes: [],
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
          cc_num: '',
          cc_exp: '',
          cc_sec_code: '',
          // cc_num: e.target.cc_num.value,
          // cc_exp: e.target.cc_exp.value,
          // cc_sec_code: e.target.cc_sec_code.value,
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
      const response = await fetch(baseUrl + '/users/login', {
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
          loginOpen: false,
          })
        this.newOrder()
        console.log('current order: ' + JSON.stringify(this.state.currentOrder.data))
        console.log('current order id: ' + JSON.stringify(this.state.currentOrder.data.id))
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
        userLoggedIn: false,
        orderOpen: false,
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
      console.log('data: ' + data.data)
      this.setState({
        dishes: data.data
      })
      console.log('new data: ' + data.data)
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
          currentOrder: newOrder,
          orderOpen: true,
        })
        console.log('newOrder: ' + JSON.stringify(newOrder))
        console.log('newOrderID: ' + JSON.stringify(newOrder.data.id))
        console.log('currentOrder: ' + this.state.currentOrder)
      }
    }
    catch(err){
      console.log('Error -> ', err)
      console.log('order not created...')
    }

  }

  addDishToOrder =(dish_id)=> {
    
    // find the dish by id
 
    // push to orderedDishes[]
 
    // total prices dynamically

  }

  toggleRegisterForm = () => {
    this.setState({
      registerOpen: !this.state.registerOpen,
    }, ()=>console.log('registerOpen after set state: ' + this.state.registerOpen)
    )
    console.log('toggleRegisterForm clicked')
  }

  toggleLoginForm = () => {
    this.setState({
      loginOpen: !this.state.loginOpen,
    }, ()=>console.log('loginOpen after set state: ' + this.state.loginOpen)
    )
    console.log('toggleLoginForm clicked')
  }
  
  toggleOrderForm = () => {
    this.setState({
      orderOpen: !this.state.orderOpen,
    }, ()=>console.log('orderOpen after set state: ' + this.state.orderOpen)
    )
    console.log('toggleOrderForm clicked')
  }

  componentDidMount(){
    this.getDishes()
  }
  
  render(){
    
    return (
      <div className="App">
      <Nav 
        toggleRegisterForm={this.toggleRegisterForm}
        registerOpen={this.state.registerOpen}
        toggleLoginForm={this.toggleLoginForm}
        loginOpen={this.state.loginOpen}
        toggleOrderForm={this.toggleOrderForm}
        orderOpen={this.state.orderOpen}
        logoutUser={this.logoutUser}
        userLoggedIn={this.state.userLoggedIn}
      />
      <Logo />

      <Register 
        register={this.register}
        registerOpen={this.state.registerOpen}
      />
      <Login 
        loginUser={this.loginUser}
        loginOpen={this.state.loginOpen}
      />

      <div className="bottom-container">
        <Menu 
          dishes = {this.state.dishes}
          currentOrder = {this.state.currentOrder}
          addDishToOrder = {this.addDishToOrder}
        />
        <Order 
        orderOpen={this.state.orderOpen}
        currentOrder={this.state.currentOrder}
        />
      </div>
        {/* {this.paymentOpen &&  */}
        {/* <Payment /> */}
        {/* } */}
    </div>
    );
  }
}

export default App;
