import React from "react";
import { useState } from 'react';

export default function Product(props){



    var addItemToOrder = () => {
        
        props.addOrder(props.prodName,props.prodPrice,props.id)
        

    }   



return(

   <div className="productDiv">


   <h3  style={{display: "inline-block", marginRight: "30px",fontWeight: "bold"}} className="text">{props.prodName}</h3> 
   <h3 className="text" style={{display: "inline-block", marginRight: "30px"}}>{props.prodPrice}</h3>
   <button style={{display: "inline-block", textAlign: "end"}} onClick={addItemToOrder}>+</button>


   </div>
    
)

}