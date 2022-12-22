import React, { Component } from 'react'

import './style.css'
export default class AddNewCounter extends Component {
    state = {
        value: 1
    }

    handelChange = (e) => {
        this.setState({ value: parseInt(e.target.value) });
    }

    render() {
        return (
            <div className='add-new-counter'>
                <input type="number" placeholder="new counter change by" onChange={this.handelChange} min={1} />
                <button onClick={() => this.props.addNewCounter(this.state.value)}>Add</button>
            </div>
        )
    }
}
