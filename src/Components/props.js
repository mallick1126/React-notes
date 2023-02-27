import React, { Component } from "react";

//use of props in functional component.
/*const Props = (props) => {
    return (
        <div>
            <h1>Hello {props.name} aka {props.heroname}</h1>
            {props.children}
        </div>
    )
}*/

//use of props in class component.
class Props extends Component {
    render() {
        return (
            <div>
            <h1>Hello {this.props.name} aka {this.props.heroname}</h1>
            {this.props.children}
        </div>
        )
    }
}

export default Props;