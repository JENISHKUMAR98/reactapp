import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Good Morning</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id:'hello', className:'dummyClass'},
        React.createElement('h1','null','hello New York'))
}
export default Hello

