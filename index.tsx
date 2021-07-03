declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import { NavBar } from "./shared/NavBar"

export class Hello extends React.Component {
    render() {
        return (
            <h1>test</h1>
        );
    }
}


ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(<NavBar />, document.getElementById('navbar'));
