import React, { Component } from 'react';

import './style.css';

class Counter extends Component {
    render() {
        return (
            <div className='counter'>
                <button className="decrement" onClick={() => this.props.decrement(1)}>-</button>
                <p>{this.props.counter}</p>
                <button className="increment" onClick={() => this.props.increment(1)}>+</button>
            </div>
        );
    }
}

export default Counter;
