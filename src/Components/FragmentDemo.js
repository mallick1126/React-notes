import React from 'react'

function FragmentDemo() {
    return (
        // no we can see that we get an extra dev tag when we do this, so to avoid this we use react.fragment 
        <React.Fragment>
            <h1>FragmentDemo</h1>
            <p>This is a demo fragment</p>
        </React.Fragment>
    )
}

export default FragmentDemo