import './App.css';
import React, { Component } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Order from './components/Order';
import OrderSpacer from './components/OrderSpacer';
import Payment from './components/Payment';


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
      cc_num: '',
      cc_exp:  '',
      cc_sec_code: '',
      firstName: '',
      lastName: '',
      userLoggedIn: false,
      logoOpen: true,
      registerOpen: false,
      loginOpen: false,
      menuOpen: false,
      orderOpen: false,
      paymentOpen: false,
      orders: [],
      dishes: [],
      currentOrderId: null,
      orderedDishes: [],
      orderEmpty: true,
      currentOrderedDishId: null,
      currentOrderTotal: 0,
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
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.status === 201) {
        this.getDishes()
        console.log('🥳 register successful! 🥳')
        this.setState({
          registerOpen: false,
          loginOpen: true,
          })
      } else {

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
      if(response.status === 200){
        this.getOrders()
        this.getDishes()
        console.log('🥳 login successful! 🥳')
        this.setState({
          username: e.target.username.value,
          password: e.target.password.value,
          userLoggedIn: true,
          loginOpen: false,
          menuOpen: true,
          logoOpen: false,
          })
        this.newOrder()
      } else {
        alert('☠️ Incorrect username/login... ☠️ Please try again or register before logging in.')
        console.log('😖 login failed 😖')
      }
    }
    catch(err){
      alert('login unsuccessful')
      console.log('Error => ', err)
      console.log('😖 login failed 😖')
    }
  }

  logoutUser = () => {
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
      this.setState({
        dishes: data.data
      })
    })
  }

  getOrders = () => {
    fetch(baseUrl + '/orders/', {
      credentials: 'include'
    })
    .then (res => {
      if(res.status === 200) {
        console.log('📝 fetch index orders successful! 📝')
        return res.json()
      } else {
        console.log('fetch index orders failed...💣')
        return[]
      }
    })
    .then(data => {
      this.setState({
        orders: data.data
      })
      console.log('new data: ' + JSON.stringify(data.data))
    })
  }

  newOrder = async () => {
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
      if(response.status === 201){
        const newOrder = await response.json()
        this.getOrders()
        const copyOrders = [...this.state.orders]
        copyOrders.push(newOrder)
        this.setState({
          orders: copyOrders,
          currentOrderId: newOrder.data.id,
          orderOpen: true,
        })
      }
    }
    catch(err){
      console.log('Error -> ', err)
      console.log('order not created...')
    }
  }

  sumOrderedDishPrices = () => {
  const dishes = this.state.orderedDishes
  const total = dishes.reduce((total, obj) => obj.dish.price + total, 0)
  this.setState({
    currentOrderTotal: total,
  })
}

  subOrderedDishPrices = (id) => {
    const findIndex = this.state.orderedDishes.findIndex(orderedDish => orderedDish.id === id)
    const orderedDish = this.state.orderedDishes[findIndex]
    const currentTotal = this.state.currentOrderTotal
    const newTotal = currentTotal - orderedDish.dish.price
    this.setState({
      currentOrderTotal: newTotal,
    })

  }

  addDishToOrder =(order_id, dish_id)=> {
    if(!this.state.userLoggedIn){
      alert('❌ You must log in first to create an order. ❌')
      this.setState({
        loginOpen: true,
        logoOpen: false,
        menuOpen: false,
        orderOpen: false,
      })
    } else {
      fetch(baseUrl + '/ordered_dishes/' + order_id + '/' + dish_id + '/', {
        method: 'POST',
        credentials: 'include',
      })
      .then(res => {
        if(res.status === 200){
          console.log('dish added to order!')
          return res.json()
        } else {
          console.log('dish was not added...')
          return []
        }
      })
      .then(data => {
        const copyOrderedDishes = [...this.state.orderedDishes, data.data]
        this.setState({
          currentOrderId: order_id,
          orderedDishes: copyOrderedDishes,
          currentOrderedDishId: copyOrderedDishes[copyOrderedDishes.length-1].id,
          currentOrderTotal: null,
        })
      })
      .then(()=>{
        this.sumOrderedDishPrices()
      })
    }

  }

   updateOrderedDish = (order_id, dish_id, ordered_dish_id) => {
    fetch(baseUrl + '/ordered_dishes/' + order_id + '/' + dish_id + '/' + ordered_dish_id, { 
      method: 'PUT',
      credentials: 'include'
    })
    .then(res => {
      if(res.status === 200){
        console.log('ordered dish updated!')
        return res.json()
      } else {
        console.log('dish was not updated...')
        return []
      }
    })
    .then(data => {
      const updatedOrderedDish = data.data
      console.log(updatedOrderedDish)
      const findIndex = this.state.orderedDishes.findIndex(orderedDish => orderedDish.id === updatedOrderedDish.id)
      const copyOrderedDishes = [...this.state.orderedDishes]
      copyOrderedDishes[findIndex] = updatedOrderedDish
      this.setState({
        orderedDishes: copyOrderedDishes
      })
    })
  }

  deleteOrderedDish = (id) => {
    console.log(id)
    this.subOrderedDishPrices(id)
    fetch(baseUrl + '/ordered_dishes/' + id + '/', {
      method: 'DELETE',
    })
    .then(res => {
      console.log(res)
      const findIndex = this.state.orderedDishes.findIndex(orderedDish => orderedDish.id === id)
      const copyOrderedDishes = [...this.state.orderedDishes]
      copyOrderedDishes.splice(findIndex, 1)
      this.setState({
        orderedDishes: copyOrderedDishes,
      })
    })
  }

  toggleLogo = () => {
    this.setState({
      logoOpen: true,
      menuOpen: false,
      registerOpen: false,
      loginOpen: false,
    }, ()=>console.log('logoOpen after set state: ' + this.state.logoOpen)
    )
  }

  toggleMenu = () => {
    if(this.state.dishes === []){
      this.getDishes()
    }
    this.setState({
      logoOpen: false,
      menuOpen: true,
      registerOpen: false,
      loginOpen: false,
    }, ()=>console.log('logoOpen after set state: ' + this.state.logoOpen)
    )
    console.log('toggleLogo clicked')
  }


  toggleRegisterForm = () => {
    this.setState({
      registerOpen: !this.state.registerOpen,
      loginOpen: false,
      menuOpen: false,
      logoOpen: false,
    }, ()=>console.log('registerOpen after set state: ' + this.state.registerOpen)
    )
  }
  
  toggleLoginForm = () => {
    this.setState({
      loginOpen: !this.state.loginOpen,
      menuOpen: false,
      logoOpen: false,
      registerOpen: false,
    }, ()=>console.log('loginOpen after set state: ' + this.state.loginOpen)
    )
  }
  
  toggleOrderForm = () => {
    this.setState({
      orderOpen: !this.state.orderOpen,
    }, ()=>console.log('orderOpen after set state: ' + this.state.orderOpen)
    )
  }
  
  togglePaymentForm = () => {
    this.setState({
      paymentOpen: !this.state.paymentOpen,
    }, ()=>console.log('paymentOpen after set state: ' + this.state.paymentOpen)
    )
  }

  checkout = () => {
    alert('Your order has been completed!')
    // square api call needs to be ported here
  }
  
  componentDidMount(){
    this.getDishes()
  }
  
  render(){
    
    return (
      <div className="App">
        <Payment
          currentOrderTotal={this.state.currentOrderTotal}
          paymentOpen={this.state.paymentOpen}
          togglePaymentForm={this.togglePaymentForm}
          checkout={this.checkout}
        />
        <Nav 
          toggleRegisterForm={this.toggleRegisterForm}
          registerOpen={this.state.registerOpen}
          toggleLoginForm={this.toggleLoginForm}
          loginOpen={this.state.loginOpen}
          toggleOrderForm={this.toggleOrderForm}
          toggleLogo={this.toggleLogo}
          toggleMenu={this.toggleMenu}
          orderOpen={this.state.orderOpen}
          logoutUser={this.logoutUser}
          userLoggedIn={this.state.userLoggedIn}
        />
        <Logo 
          logoOpen={this.state.logoOpen}
        />
        <Register 
          register={this.register}
          registerOpen={this.state.registerOpen}
          toggleRegisterForm={this.toggleRegisterForm}
          toggleMenu={this.toggleMenu}
        />
        <Login 
          loginUser={this.loginUser}
          loginOpen={this.state.loginOpen}
          toggleMenu={this.toggleMenu}
          toggleRegisterForm={this.toggleRegisterForm}

        />

        <div className="bottom-container">
          <Menu 
            dishes = {this.state.dishes}
            currentOrderId = {this.state.currentOrderId}
            addDishToOrder = {this.addDishToOrder}
            menuOpen={this.state.menuOpen}
          />
          <Order 
            username={this.state.username}
            orderOpen={this.state.orderOpen}
            orderedDishes={this.state.orderedDishes}
            orderedDishQty={this.state.orderedDishQty}
            currentOrderId={this.state.currentOrderId}
            orders={this.state.orders}
            currentOrderTotal={this.state.currentOrderTotal}
            deletedOrderedDish={this.deleteOrderedDish}
            togglePaymentForm={this.togglePaymentForm}
          />
          <OrderSpacer
            orderOpen={this.state.orderOpen}
          /> 
        </div>
      </div>
    );
  }
}

export default App;
