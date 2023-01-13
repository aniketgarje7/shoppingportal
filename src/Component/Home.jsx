
import React,{useEffect} from 'react'
import SingleProduct from './SingleProduct'
import {Row,Col,Container} from 'react-bootstrap'
import NavbarComponent from './Navbar'
import { useSelector ,useDispatch} from 'react-redux'
import { setData } from '../Redux/action'
const Home = () => {
  const products = useSelector((state)=>state.data)
 const dispatch = useDispatch()
 useEffect(()=>{
     fetch('https://fakestoreapi.com/products')
     .then((data)=>data.json())
     .then((res)=>dispatch(setData(res)))
 },[])
 console.log(products)
 console.log('cart')
  return (
    <>
    <NavbarComponent/>
    <Container style = {{marginTop:'100px'}}>

    <Row container spacing={3} >
      {products.length>0 && products.map((single)=><Col xm={12} key={single.id}><SingleProduct data={single}/></Col>)}
      
      </Row>

      </Container>
      
      </>
  )
}

export default Home