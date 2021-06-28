declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export class NavBar extends React.Component {
    render() {
        return (
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/Demo1.html">Basic API Call </a></li>
            </ul>
        );
    }

}
