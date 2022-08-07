import {Component} from "react";


export class Toggler extends Component {
    state = {
        enabled: false,
        users: [
            {name: "Bob", id: 1},
            {name: "Bub", id: 2},
            {name: "Bib", id: 3},
            {name: "Bab", id: 4},
            {name: "Beb", id: 5}
        ],
    }
    toggleHandler = () => this.setState({enabled: !this.state.enabled});

    enabledJSX = <p>ENABLED</p>
    diabledJSX = <p>DISABLED</p>

    render() {
        return (
            <div>
                <button onClick={this.toggleHandler}>Toggle</button>
                {this.state.enabled ? this.enabledJSX : this.diabledJSX}
                {this.state.enabled && this.enabledJSX}
                {this.state.users.map(user => <p key={user.id}>{user.name}</p>)}
            </div>
        );
    }
}