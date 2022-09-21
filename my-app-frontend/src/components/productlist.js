import React, { Component } from 'react';
import trialservice from '../services/trialservice';
import axios from 'axios';



class productlist extends Component {
    constructor(props){
        super(props);
        this.state={
            products :[],
            categories: [],
            cat_id: ''

        }
    }

    componentDidMount(){
        trialservice.getProducts().then((res)=>
        {
            this.setState({products: res.data});
        }
        );
        trialservice.getCategory().then( (res) =>{
            this.setState({categories: res.data});
        });
    }

    categorysort(){
        trialservice.getProductByCategory(this.state.cat_id).then((res)=>{
            this.setState({products: res.data});
        });
    }

    onChange = e =>{
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        return (
            <div>
                <h2 className='text-center alert alert-primary'>Product List</h2>
                <div className='col-md-10 offset-md-1 border rounded p-2 mt-2 shadow'>
                    <div className='col-md-8 offset-md-2'>
                        <label> show product by category: </label>
                        <select placeholder="product category" name="cat_id" className="form-control" 
                            value={this.state.cat_id} onChange={this.onChange}>
                                <option value='' disabled="disabled" >Choose Option</option>
                                {
                                    this.state.categories.map(
                                        categories =>
                                        <option key={categories.cat_id} value={categories.cat_id} >{categories.cat_name}</option>
                                    )
                                }
                        </select>
                    </div>
                    <br/>
                    <div className='offset-md-6' >
                    <button type='button' className="btn btn-primary mb-2" onClick={this.categorysort.bind(this)} >search by category</button>
                    </div>
                    <table className='table table-bordered table-striped'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Name</th>
                                <th>Details</th>
                                <th>Minimum bid</th>
                                <th>Opening Date</th>
                                <th>Closing Date</th>
                                <th>view</th>
                            </tr>
                        </thead>
                        <tbody>
                            <div className='text text-danger'><b id='message'></b></div>
                            {
                                this.state.products.map(
                                    products =>
                                    <tr key={products.product_id}>
                                        <td> {products.name} </td>
                                        <td> {products.details} </td>
                                        <td> {products.min_bid} </td>
                                        <td> {products.opening_date} </td>
                                        <td> {products.closing_date} </td>
                                        <td> <button type='button' className="btn btn-primary mb-2">view</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default productlist;