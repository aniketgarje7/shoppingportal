import React from 'react'
import { useSelector } from 'react-redux'
import {Container, Row,Col, Button} from 'react-bootstrap'
import SingleProduct from './SingleProduct'
import NavbarComponent from './Navbar'
const Cart = () => {
  const cart = useSelector((state)=>state.cart)

  
  console.log('cart' ,cart)
  const total = ()=>{
    let sum = 0
    for(let single of cart){
      sum+= (single.price)*(single.quantity)
    }
    return sum
  }
  return (
    <>
   
    <NavbarComponent/>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center' ,marginBottom:'20px'}}>
      <h1>Total: {Math.floor(total())}</h1>
      <div>
      <Button>Checkout</Button>
      </div>
    </div>
    <Container>

    <Row>
    {cart.length>0 && cart.map((single)=><Col key={single.id}><SingleProduct data={single} /></Col>)}
     </Row>
     </Container>
     </>
  )
}

export default Cart