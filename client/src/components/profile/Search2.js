import React from 'react'
import Loading from '../style/comman/loading.gif'
import { Searchh } from '../style/profile'

export default function Search2(props) {
  

    if(props.search == null)
    return (
        <div>
            ..
        </div>
    )
    else {
        return (

   <Searchh>
     
   {props.search.map((repo) => {
                
    return (
       
<div onClick={ () => props.send(repo.HotelName, repo.category)} key ={repo._id} >
        <img src={repo.image} ></img>
     
    <h2>{repo.Hotel}</h2>    
   
        
    </div>
        
        
    )
}
)}
   

   
   </Searchh>
        )

    }
}
