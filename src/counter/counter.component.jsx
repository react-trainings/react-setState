import React, { Component } from 'react';

import './counter.styles.css';

class Counter extends Component {
    state = { count: 0 };

    componentDidMount() {
        const { init = 1 } = this.props;
        this.setState({ count: init });
    }

    handleIncrement() {
        this.setState(
            (prevState, { value = 1 }) => ({
                count: prevState.count + value
            }),
            () => {
                // this is executed after the state changes
                console.log(this.state.count, ' | ', this.props.value);
            }
        );
    }

    handleDecrement() {
        this.setState(
            (prevState, { value = 1 }) => {
                return {
                    count: prevState.count - value
                };
            },
            () => {
                console.log(this.state.count, ' | ', this.props.value);
            }
        );
    }

    callIncrementFiveTimes() {
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
    }

    callDecrementFiveTimes() {
        this.handleDecrement();
        this.handleDecrement();
        this.handleDecrement();
        this.handleDecrement();
        this.handleDecrement();
    }

    render() {
        const { count } = this.state;

        return (
            <div className="counter">
                <h3>{count}</h3>
                <button className="counter-button" onClick={() => this.handleIncrement()}>
                    &#xFF0B;
                </button>
                <button className="counter-button" onClick={() => this.callIncrementFiveTimes()}>
                    x5
                </button>
                <button className="counter-button" onClick={() => this.handleDecrement()}>
                    &minus;
                </button>
                <button className="counter-button" onClick={() => this.callDecrementFiveTimes()}>
                    x(-5)
                </button>
            </div>
        );
    }
}

export default Counter;
