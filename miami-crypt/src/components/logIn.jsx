import React, { Component } from 'react';

class LogInPage extends Component {
    
    setStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        //height: '100vh',
    };

    setBackground = ( "p-3 mb-2 bg-info" );
    
    state = {
        submit: false,
        value1: "Username",
        value2: "Password",
    }

    constructor ()
    {
        super ();
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeUser (event)
    {
        this.setState ({ value1: event.target.value1 });
    }

    handleChangePassword (event)
    {
        this.setState ({ value2: event.target.value2 });
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
                <h1 style= {{ fontSize: 60 }}>Log In</h1>
                <input
                    type = "text"
                    value = { this.state.value1 }
                    onChange = { this.handleChangeUser }
                    style = {{ position: 'absolute', top: 135, fontSize: 20 }}
                />
                <input
                    type = "text"
                    value = { this.state.value2 }
                    onChange = { this.handleChangePassword }
                    style = {{ position: 'absolute', top: 185, fontSize: 20 }}
                />
                <button
                 style = {{ position: 'absolute', top: 265, fontSize: 25 }}
                 onClick = { () => this.setSubmit() }
                >
                    Submit
                </button>
            </div>
        );
    }
}
 
export default LogInPage;