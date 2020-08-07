import React from 'react'
import { Loader, } from '../style/profile'
import Loading from '../style/comman/loading.gif'

export default function Cart(props) {
    const { cart, remove,Checkout } = props;
    
    if(cart === null){

        return  (
            <Loader>
            <img  alt="pl" src={Loading} ></img>
            </Loader>
            )



    }
else {



    if(cart === '')
    return (
        <div>
        <h3>Your Cart</h3>

        <img alt="pl" src={'https://res.cloudinary.com/spark3313/image/upload/v1595935770/zsl12lnrqgpncpwxfwft.png'} ></img>
        
        </div>
    )
    else {
  return (
    <div>
    <h2>Cart <br></br> <span>{cart.length} ITEM</span></h2>
   
    {cart.map((repo) => {
                
        return (

     
     
   <li key ={repo._id}  >
   <h3>{repo.item}</h3>

<div className="count">



<i onClick={() => remove(repo._id)}  class="fa fa-trash" aria-hidden="true"></i>
</div>
 
 
 
 

   </li>
  
   
      
            
        )
    }
    )}
    <div className="sub">

   <h4> Subtotal <br></br>
   <span>Extra charges may apply</span> </h4>

   <h4> ₹ {cart.reduce((a, b) => (a + b.price), 0)}</h4>

   </div>

  

   <button  onClick={()=> Checkout(cart)}>
   Checkout <i class="fa fa-arrow-right"></i>
   </button>
</div>
  )


    }
}

}