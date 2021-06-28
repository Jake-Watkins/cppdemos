declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import {NavBar} from "./shared/NavBar";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            value: 0
        };
    }
    componentDidMount() {
        fetch("/myapicall", {
            "method": "GET"
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    error: response.error,
                    value: response.value
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="display-4 text-center">Make An API Call in React</h1>
                        <form className="d-flex flex-column">
                            <label htmlFor="value">
                                value:
                                <input
                                    name="value"
                                    id="value"
                                    type="text"
                                    className="form-control"
                                    value={this.state.value}
                                    onChange={(e) => this.handleChange({ name: e.target.value })}
                                    required
                                />
                            </label>
                            <label htmlFor="error">
                                error:
                                <input
                                    name="error"
                                    id="error"
                                    type="test"
                                    className="form-control"
                                    value={this.state.error}
                                    onChange={(e) => this.handleChange({ error: e.target.value })}
                                    required
                                />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<NavBar />, document.getElementById('navbar'));
ReactDOM.render(<App />, document.getElementById('Demo1'));