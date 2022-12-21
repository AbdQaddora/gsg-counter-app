import React, { Component } from 'react';

import './style.css';

class Counter extends Component {
    render() {
        return (
            <div className='counter'>
                <button className="decrement" onClick={this.props.decrement}>-</button>
                <p>{this.props.counter}</p>
                <button className="increment" onClick={this.props.increment}>+</button>
            </div>
        );
    }
}

export default Counter;
