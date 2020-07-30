import React from 'react'
import { Store, Loader, Head, Data, Top, Midd} from '../style/profile'
import Loading from '../style/comman/loading.gif'

export default function Cart(props) {
    const { cart, remove,Checkout } = props;
    
    if(cart === null){

        return  (
            <Loader>
            <img src={Loading} ></img>
            </Loader>
            )



    }
else {



    if(cart == '')
    return (
        <div>
        <h3>Your Cart</h3>

        <img src={'https://res.cloudinary.com/spark3313/image/upload/v1595935770/zsl12lnrqgpncpwxfwft.png'} ></img>
        
        </div>
    )
    else {
  return (
    <div>
    <h2>Cart <br></br> <span>{cart.length} ITEM</span></h2>
   
    {cart.map((repo) => {
                
        return (

     
     
   <li key ={repo._id}  >
   <h3>{repo.name}</h3>
   <i onClick={() => remove(repo._id)}  class="fa fa-trash" aria-hidden="true"></i>
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