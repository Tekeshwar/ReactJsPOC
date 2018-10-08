import React, { Component } from 'react';
import '../Container/Signup.css';
class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rePassword: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {        
        const { name, value } = event.target;
        this.setState({ [name]: value });         
    }
    handleSubmit(event) {
        alert('Eamil:- ' + this.state.email+' Password:-  '+this.state.password);
        event.preventDefault();
    }
    render() {
        return (
            // <div className='container'>
            <form onSubmit={this.handleSubmit} className='container'>
                <div className='page-title'>
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                </div>
                <hr />

                <label ><b>Email</b></label>
                <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Enter Email" />

                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" onChange={this.handleChange} name="password" value={this.state.password} />

                <label ><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" onChange={this.handleChange} name="rePassword" value={this.state.rePassword} />
                <label>
                    <input type="checkbox" name="remember" /> Remember me
                </label>
                <button type="submit"  className="btn btn-success">Sign Up</button>
            </form>
            // </div>
        );
    }
}

export default Signup;