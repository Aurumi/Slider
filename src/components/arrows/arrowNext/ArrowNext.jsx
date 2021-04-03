import React from "react";
import "./ArrowNext.css"


const ArrowNext = ( props ) =>{


    return <div className = "container-arrow-next" onClick={ props.disable ? null:props.Next} >
    
    <div className = "arrow-next" >

    </div>
    </div>
}

export default ArrowNext