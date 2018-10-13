import React, { Component } from 'react';

class Home extends React.Component {
    render() {
        //===Outputting Dynamic Start======
        let constant = "";
        if (false) {
            constant = <p> Hello VCS Team</p>;
        } else {
            constant = <p></p>;
        }
         
        return (
            <div id='home'>
                   
                {constant}
                <p>Name:- {this.props.name}</p>
                <div>
                    <h3>Employee List</h3>
                    {this.props.employeesList.employees.map((emp,i)=> <p key={i} >{i +" "}FirstName:-{emp.firstName} LastName:-{emp.lastName}</p>) }
                </div> 
            </div>
        )
    };
}
export default Home; 