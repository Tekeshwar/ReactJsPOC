import React, { Component } from 'react';
import '../assets/styles/home.css'
class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };

    }
    makeOlder() {
        this.setState ({                         
            age: this.state.age + 4
        });
    }
    render() {
        return (
            <div className="home-container">
                <p>Your name is:- {this.props.name} and your age is:- {this.state.age}</p>
                <p>status: {this.state.status}</p>
                <input className="btn btn-primery btn-success" type="button" value="Make me older"
                    onClick={this.makeOlder.bind(this)} />
                {/* we can not write like this.makeOlder(), because it will call immediately */}
            </div>
        );
    }
}
export default Home; 