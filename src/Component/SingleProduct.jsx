import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {add,remove,addQ,removeQ} from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import {BsCurrencyDollar} from 'react-icons/bs'

const SingleProduct = ({data}) => {
 const cart = useSelector((state)=>state.cart)


//  console.log(cart)
 const dispatch = useDispatch()
//  console.log('jgar')
console.log(data.quantity)
  return (

    <Card style={{ width: '22rem' ,marginBottom:'20px',height:'550px'}}>
      <Card.Img variant="top" src={data.image}  style={{padding:'30px', borderRadius:'10px',height:'290px',width:'210px'}}/>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
        {data.description.substring(0,100)}
        </Card.Text>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span>Price: <BsCurrencyDollar/>{Math.floor(data.price)}</span>
        {data.quantity &&
        <span><AiOutlinePlus onClick={()=>dispatch(addQ(data))}/>  {data.quantity}
        {data.quantity>1 && <AiOutlineMinus onClick={()=>dispatch(removeQ(data))}/>}</span>}
        {cart.map((single)=>single.id).includes(data.id)?
        <Button size="small" onClick={()=>dispatch(remove(data))}>Remove</Button>
        :<Button size="small" onClick={()=>dispatch(add(data))}>Add to cart</Button>}
        </div>
      </Card.Body>
    </Card>
   
  
        
       
        
     
      
    
  );

  
}

export default SingleProduct