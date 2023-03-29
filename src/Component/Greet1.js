
import React from 'react'
//
//    function Greet1() {
// return <h1> Hello Jenish </h1>
//   }
//simple Javascript

// first Method
// const Greet1 = ({name, heroName}) => {
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//
//         </div>
//     )
// }
//
// //Es6
// export default Greet1


// Second Method
const Greet1 = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>

        </div>
    )
}

//Es6
export default Greet1

// Destructuring props and state