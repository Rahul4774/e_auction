import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import userService from '../services/user.service';
import trialservice from '../services/trialservice';

function showHideUserTable(){
    document.getElementById("usertable").style.display="block";
    document.getElementById("producttable").style.display="none";
    document.getElementById("winnertable").style.display="none";

}

function showHideProductTable(){
    document.getElementById("usertable").style.display="none";
    document.getElementById("winnertable").style.display="none";
    document.getElementById("producttable").style.display="block";
}

function showHideWinnerTable(){
    document.getElementById("usertable").style.display="none";
    document.getElementById("producttable").style.display="none";
    document.getElementById("winnertable").style.display="block";
}

class adminpage extends Component {

    constructor(props){
        super(props)

        this.state = {
            users :[],
            products :[],
            winners :[]
        }

    }

    componentDidMount(){
        var urole = sessionStorage.getItem("user_role");
        if(urole === "ADMIN"){
        userService.getAllUsers().then((res) => {
            this.setState({users: res.data});
        });
        trialservice.getProducts().then((res) => {
            this.setState({products: res.data});
        });
        }else{
            this.props.history.push('/login');
        }
    }

    maillink(mailurl){
        var ml = "mailto:";
        return (ml + mailurl);
        
    }

    render() {
        return (
            
            <div className='text-center'>
                <div className='col-md-10 offset-md-1 rounded p-2 mt-2 shadow'>
                    <div className='container'>
                        <button id='btnuser' type='button' className='btn btn-active btn-info' onClick={showHideUserTable} >show Users</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button id='btnproduct' type='button' className='btn btn-active btn-info' onClick={showHideProductTable}>show Products</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button id='btnwinner' type='button' className='btn btn-active btn-info'onClick={showHideWinnerTable}>show Winners</button>
                    </div>
                    <br/>
                    <br/>
                        <div>
                            <table id='usertable' className='table table-hover table-bordered'>
                                <thead><td colSpan="12"style={{ fontSize: 30 }} ><b>User's</b></td></thead>
                                <thead className='table-dark'>
                                    <tr>
                                    <td>ID No.</td>
                                    <td>Name</td>
                                    <td>Address</td>
                                    <td>Mail</td>
                                    <td>Contact</td>
                                    <td className='text-danger'><small>Remove User</small></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map(
                                            user => 
                                            <tr key={user.id}>
                                                <td>{user.id}-<small className='' style={{ fontSize: 10 }}>{user.role}</small></td>
                                                <td>{user.name}</td>
                                                <td>{user.address}</td>
                                                <td>{user.mail}</td>
                                                <td>{user.mobile}</td>
                                                <td className='text-danger'><i className='fas fa-user-minus'/></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                </div>

                <div className='text-center'>
                    <div className='col-md-10 offset-md-1 rounded p-2 mt-2 shadow'>                        
                        <div className='container'>
                            <table id='producttable' className='table table-hover table-bordered'>
                                <thead><td colSpan="12" style={{ fontSize: 30 }} ><b>Product's</b></td></thead>
                                <thead className='table-primary'>
                                    <td><b>ID No.</b></td>
                                    <td><b>Name</b></td>
                                    <td><b>Details</b></td>
                                    <td><b>End Date</b></td>
                                    <td><b>Status</b></td>
                                    <td className='text-danger'><small>Remove Product</small></td>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.map(
                                            product => 
                                            <tr key={product.product_id}>
                                                <td>{product.product_id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.details}</td>
                                                <td>{product.closing_date}</td>
                                                <td>{product.status}</td>
                                                <td className='text-danger'><i className='fas fa-trash'/></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <div className='col-md-10 offset-md-1 rounded p-2 mt-2 shadow'>                        
                        <div className='container'>
                            <table id='winnertable' className='table table-hover'>
                                <thead><td colSpan="12" style={{ fontSize: 30 }} ><b>winners's</b></td></thead>
                                <thead className='table-primary'>
                                    <td><b>ID No.</b></td>
                                    <td><b>Name</b></td>
                                    <td><b>Details</b></td>
                                    <td><b>End Date</b></td>
                                    <td><b>Status</b></td>
                                    <td className='text-danger'><small>Congratulate Winners</small></td>
                                </thead>
                                <tbody>
                                    {
                                    
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default adminpage;