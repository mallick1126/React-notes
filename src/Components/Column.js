import React from 'react'

function Column() {
    return (
        // <React.Fragment>
        //     <td>Name</td>
        //     <td>Bruce</td>
        // </React.Fragment>

        // A shorthand to this is to use just an opening and closing tag like this.

        <>
        {/*  But if we use this we will not be able to pass any attribute like we will not be able to pass the key attribute*/}
            <td>Name</td>
            <td>Bruce</td>
        </>
    )
}
export default Column