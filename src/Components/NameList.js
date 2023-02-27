import React, { Component } from 'react'

class NameList extends Component {
  render() {
    const names = ['Bruce', 'Clarke', 'Diana', 'Bruce']
    const nameList = names.map((name, index) => <h2 key = {index}> {index} {name}</h2>)
    //here as we don't have any unique element to pass as key, hence we are using index of the array as a key prop to uniquely identify the element.

    // Using index as a key can be very disastarous in some scenarios as react will try to fill those values first which are already have a value with those index values, which can create problem in some scenarios. So it's better to use id as key instead of index.
    return (
      <div>{nameList}</div>
    )
  }
}

export default NameList