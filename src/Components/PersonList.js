import React, { Component } from 'react'
import Person from './Person'

/// List rendering in React is done using the JavaScript map() method:
class PersonList extends Component {
    render() {
        const persons = [
            {
                id: 1,
                name: 'Bruce',
                age: 30,
                skill: 'React'
            },
            {
                id: 2,
                name: 'Clarke',
                age: 27,
                skill: 'Angular'
            },
            {
                id: 3,
                name: 'Diana',
                age: 38,
                skill: 'Vue'
            }
        ]
        const personList = persons.map(person => <Person key = {person.id} person = {person} />)
        // key is not a prop but rather it's a reserved word which stores a unique value from the arraylist which in turn help react understand which value are modified, added, or are removed.
        return (
            <div>{personList}</div>
        )
    }
}

export default PersonList