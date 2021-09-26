import React, { Component } from 'react';

class SignUpPage extends Component {
    
    setStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        //height: '100vh',
    };

    setBackground = ( "p-3 mb-2 bg-info" );
    
    state = {
        submit: false,
        value1: "Email",
        value2: "Username",
        value3: "Password",
        value4: "Re-entry of Password",
    }

    constructor ()
    {
        super ();
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeReEntry = this.handleChangeReEntry.bind(this);
    }

    handleChangeEmail (event)
    {
        this.setState ({ value1: event.target.value1 });
    }
    
    handleChangeUser (event)
    {
        this.setState ({ value2: event.target.value2 });
    }

    handleChangePassword (event)
    {
        this.setState ({ value3: event.target.value3 });
    }

    handleChangeReEntry (event)
    {
        this.setState ({ value4: event.target.value4 });
    }

    setSubmit ()
    {
        this.state.submit = true;
    }

    render() { 
        return (
            <div 
             style = { this.setStyle } 
             className={this.setBackground}
            >
                <h1 style= {{ fontSize: 60 }}>Sign Up</h1>
                <input
                    type = "text"
                    value = { this.state.value1 }
                    onChange = { this.handleChangeEmail }
                    style = {{ position: 'absolute', top: 135, fontSize: 20 }}
                />
                <input
                    type = "text"
                    value = { this.state.value2 }
                    onChange = { this.handleChangeUser }
                    style = {{ position: 'absolute', top: 185, fontSize: 20 }}
                />
                <input
                    type = "text"
                    value = { this.state.value3 }
                    onChange = { this.handleChangePassword }
                    style = {{ position: 'absolute', top: 235, fontSize: 20 }}
                />
                <input
                    type = "text"
                    value = { this.state.value4 }
                    onChange = { this.handleChangeReEntry }
                    style = {{ position: 'absolute', top: 285, fontSize: 20 }}
                />
                <button
                 style = {{ position: 'absolute', top: 340, fontSize: 25 }}
                 onClick = { () => this.setSubmit() }
                >
                    Submit
                </button>
            </div>
        );
    }
}
 
export default SignUpPage;