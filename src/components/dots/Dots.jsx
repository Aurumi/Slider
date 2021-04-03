import React  from 'react';
import "./Dots.css";


const Dots = ( props ) =>{


const click = ( index ) =>{

   

    props.setTransitionStep( index * -100 ) 
    props.setAnimationStep(false)
          
}

    return <div className = "container-dots">   

        <div className = "dots" >

            {props.valueDots.map((dot, index)=>{

                return <div key = {index} onClick = {() =>{click( index )}} 

                        className = { index * -100 === props.transitionStep  ? "dotHover" : "dot"}

                        style = {{transform:`translateX(${props.circleTransition}px)`}}>

                        </div>
            })}
        </div>
    </div>
}

export default Dots;
