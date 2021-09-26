import React, { Component } from 'react';
import NavBar from "./nav-bar";
import LogInPage from "./logIn";
import SignUpPage from "./signUp";

class GeneralPage extends Component {
    
    state = {
        runningPage: NavBar,
    }

    render() { 
        return (
            <div> 
                 <this.state.runningPage />
            </div>
        );
    }
}
 
export default GeneralPage;