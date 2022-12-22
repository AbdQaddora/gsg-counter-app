import React, { Component } from 'react';
import AddNewCounter from '../AddNewCounter';
import Counter from '../Counter';
import Total from '../Total';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, count: 0, changeBy: 4 },
            { id: 2, count: 0, changeBy: 2 },
            { id: 3, count: 0, changeBy: 5 },
            { id: 4, count: 0 },
        ],
        total: 0
    }

    componentDidUpdate() {
        const newTotal = this.state.counters.reduce((prev, current) => prev + current.count, 0);

        if (newTotal !== this.state.total) {
            this.setState(prev => ({
                ...prev,
                total: newTotal
            }))
        }
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

    addNewCounter = (changeBy) => {
        this.setState(prev => ({
            counters: [...prev.counters, {
                id: prev.counters.length + 1,
                count: 0,
                changeBy: changeBy
            }]
        }))
    }
    render() {
        return (
            <div className='counters'>
                {this.state.counters.map(counter => <Counter
                    key={counter.id}
                    counter={counter.count}
                    increment={() => { this.onIncrement(counter.id, counter.changeBy || 1) }}
                    decrement={() => { this.onDecrement(counter.id, counter.changeBy || 1) }}
                />)}

                <Total total={this.state.total} />
                <AddNewCounter addNewCounter={this.addNewCounter} />
            </div>
        );
    }
}

export default Counters;
