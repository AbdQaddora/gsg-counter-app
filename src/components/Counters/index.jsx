import React, { Component } from 'react';
import Counter from '../Counter';
import Total from '../Total';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, count: 0, changeBy: 4 },
            { id: 2, count: 0, changeBy: 2 },
            { id: 3, count: 0, changeBy: 5 },
            { id: 4, count: 0 },
        ]
    }

    onIncrement = (id, changeBy) => {
        this.setState(prev => {
            return {
                ...prev, counters: prev.counters.map(counter => {
                    if (counter.id === id) {
                        return { ...counter, count: counter.count + changeBy }
                    }
                    return counter
                })
            }
        })
    }

    onDecrement = (id, changeBy) => {
        this.setState(prev => {
            return {
                ...prev, counters: prev.counters.map(counter => {
                    if (counter.id === id) {
                        if (counter.count - changeBy >= 0) {
                            return { ...counter, count: counter.count - changeBy }
                        }

                    }
                    return counter
                })
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.counters.map(counter => <Counter
                    key={counter.id}
                    counter={counter.count}
                    increment={() => { this.onIncrement(counter.id, counter.changeBy || 1) }}
                    decrement={() => { this.onDecrement(counter.id, counter.changeBy || 1) }}
                />)}

                <hr />
                <Total total={this.state.counters.reduce((prev, current) => prev + current.count, 0)} />
            </div>
        );
    }
}

export default Counters;
