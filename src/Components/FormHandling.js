import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            skill: 'React'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSkillChange = (event) => {
        this.setState({
            skill: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.skill}`)
    }
    
    render() {
        const { username, comment, skill } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={this.handleUsernameChange} required= 'true'></input>
                </div>
                <div>
                    <label>Comments: </label>
                    <textarea value={comment} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Skill </label>
                    <select value={skill} onChange={this.handleSkillChange}>
                        <option value="React"> React </option>
                        <option value="Angular"> Angular </option>
                        <option value="Vue"> Vue </option>
                    </select>
                </div>
                <button type='Submit'>Submit</button>

            </form>
        )
    }
}

export default FormHandling