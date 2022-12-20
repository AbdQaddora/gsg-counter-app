import React, { Component } from 'react';
import Counter from '../Counter';
import Total from '../Total';

class Counters extends Component {
    state = {
        count1: 0,
        count2: 0,
        count3: 0,
        count4: 0,
    }

    onIncrement = (id, changeBy) => {
        this.setState(prev => { return { [`count${id}`]: prev[`count${id}`] + changeBy } })
    }

    onDecrement = (id, changeBy) => {
        this.setState(prev => { return { [`count${id}`]: (prev[`count${id}`] - changeBy) > 0 ? prev[`count${id}`] - changeBy : 0 } })
    }

    render() {
        return (
            <div>
                <Counter
                    counter={this.state.count1}
                    increment={(changeBy) => { this.onIncrement(1, changeBy) }}
                    decrement={(changeBy) => { this.onDecrement(1, changeBy) }}
                />
                <Counter
                    counter={this.state.count2}
                    increment={(changeBy) => { this.onIncrement(2, changeBy) }}
                    decrement={(changeBy) => { this.onDecrement(2, changeBy) }}
                />
                <Counter
                    counter={this.state.count3}
                    increment={(changeBy) => { this.onIncrement(3, changeBy) }}
                    decrement={(changeBy) => { this.onDecrement(3, changeBy) }}
                />
                <Counter
                    counter={this.state.count4}
                    increment={(changeBy) => { this.onIncrement(4, changeBy) }}
                    decrement={(changeBy) => { this.onDecrement(4, changeBy) }}
                />
                <hr />
                <Total total={Object.values(this.state).reduce((prev, current) => prev + current, 0)} />
            </div>
        );
    }
}

export default Counters;
