import React from 'react'
import {  Loader,} from '../style/profile'
import Loading from '../style/comman/loading.gif'

export default function Cart(props) {
    const { cart, remove, add } = props;
    
    if(cart === null){

        return  (
            <Loader>
            <img alt="pl"  src={Loading} ></img>
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



<i onClick={() => remove(repo._id)}  className="fa fa-trash" aria-hidden="true"></i>
</div>
 
 
 
 

   </li>
  
   
      
            
        )
    }
    )}

    <div className="sub">

    <h4> Partner delivery fee <br></br>
    <span>Extra charges </span> </h4>
 
    
    <h4> ₹20</h4>
 
    </div> 
    <div className="sub">

   <h4> Subtotal 
    </h4>

   
   <h4> ₹ {cart.reduce((a, b) => (a + b.price + 20), 0)}</h4>

   </div>
 

   {add}

  
</div>
  )


    }
}

}