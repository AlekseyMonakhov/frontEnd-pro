import {Component} from "react";
import './Counter.scss';

export class Counter extends Component {
    // constructor is default
    constructor(props) {
        super(props);
        console.warn("constructor");
        console.log(this.props, this.state);
    }


    state = {
        count: this.props.initialCount || 0,
    };

    componentWillUnmount() {
        console.log("do something before component will be removed");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
        console.log(prevProps, prevState)
        console.log(this.props, this.state)
    }

    componentDidMount() {
        console.warn("componentDidMount");
    }


    increment = () => {
        this.setState({count: this.state.count + 1});
    }
    decrement = () => {
        this.setState({count: this.state.count - 1});
    }

    render() {
        console.warn("render");
        return (
            <div className="Counter">
                <h1>Count</h1>
                <p>{this.state.message}</p>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>

            </div>
        );
    }
}