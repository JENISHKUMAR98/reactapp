import React from "react";

const Hello = () => {
    // return (
    //     <div className : 'dummyClass'>
    //         <h1>Good Morning</h1>
    //     </div>
    // )
    // with JSX

    return React.createElement(
        'div',
        {id:'hello', className:'dummyClass'},
        React.createElement('h1','null','Welcome to New York'))
 };
//without JSX
export default Hello

