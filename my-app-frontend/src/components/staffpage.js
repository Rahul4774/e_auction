import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import userService from '../services/user.service';
import trialservice from '../services/trialservice';


class staffpage extends Component {

   


    render() {
        return (
            
            <div className='text-center'>
                <div className='col-md-10 offset-md-1 rounded p-2 mt-2 shadow'>
                    <h5>Welcome to Staff page</h5>
                </div>
            </div>
            
        );
    }
}

export default staffpage;