
import React from 'react'
//
//    function Greet() {
// return <h1> Hello Jenish </h1>
//   }
//simple Javascript

const Greet = (props) => {
    console.log(props);
    return (
        <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}

//Es6
export default Greet
// function Components
