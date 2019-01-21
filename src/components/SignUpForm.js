import React, { Component } from 'react';
//import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
}

class MyForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName:"",
                lastName: "",
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if(formValid(this.state.formErrors)) {
            alert(` -- Form Valid -- 
                First Name : ${this.state.firstName}
                Last Name : ${this.state.lastName}
                Email : ${this.state.email}
                Password : ${this.state.password}
            `)
        } else {
            alert(`Form Invalid !`)
        }
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch(name) {
            case "firstName":
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Créer une candidature</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="" placeholder="First Name" 
                                name="firstName" formNoValidate onChange={this.handleChange}
                            />
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="" placeholder="Last Name" 
                                name="lastName" formNoValidate onChange={this.handleChange}
                            />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="" placeholder="Email" 
                                name="email" formNoValidate onChange={this.handleChange}
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="text" className="" placeholder="Password" 
                                name="password" formNoValidate onChange={this.handleChange}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default MyForm;