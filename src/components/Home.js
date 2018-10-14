import React, { Component } from 'react';
import '../assets/styles/home.css'
class Home extends React.Component {
    constructor(props) {
        super();// parent constructor that is inherited from react.
        this.age = props.age;
    }
    makeOlder() {         
        this.age += 4;
        console.log(this.age);
    }
    render() {
        return (
            <div className="home-container">
                <p>Your name is:- {this.props.name} and your age is:- {this.age}</p>
                <input  className="btn btn-primery btn-success"  type="button" value="Make me older"
                     onClick={this.makeOlder.bind(this)} />                       
                     {/* we can not write like this.makeOlder(), because it will call immediately */}
            </div>
        );
    }
}
export default Home; 