import React from "react";

// This is using JSX.

/*const Hello = ()=>{
    return (
        <div>
            <h1>Hello React</h1>
        </div>
    )
}*/

// This is Without the use of JSX.

const Hello = () => {
    return React.createElement('div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Hello React'));
}


export default Hello;