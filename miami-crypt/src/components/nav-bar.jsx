import React, { Component } from 'react';

class NavBar extends Component {
    setStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        //height: '100vh',
    };

    state = {
        logIn: false,
        signUp: false,
    };

    setLogIn () {
        this.state.logIn = true;
    };

    setSignUp () {
        this.state.signUp = true;
    };

    setBackground = ( "p-3 mb-2 bg-info" );

    notSet = (!this.state.logIn && !this.state.signUp );

    render() { 
        return (
            <div 
             style = { this.setStyle } 
             className={this.setBackground}
            >
                {this.notSet ? <h1 style= {{ fontSize: 60 }}>Crypto Folder</h1> : null}
                <button 
                 style = {{ position: 'absolute', top: 175, fontSize: 25 }}
                 onClick = { () => this.setLogIn() }
                >
                     Log In
                </button>
                <button
                 style = {{ position: 'absolute', top: 275, fontSize: 25 }}
                 onClick = { () => this.setSignUp() }
                >
                    Sign Up
                </button>
            </div>
        );
    }
}
 
export default NavBar;