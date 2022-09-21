import React, { Component } from 'react';
import trialservice from '../services/trialservice';
import '../App.css';


function selfProductbidcancel(){

}

export default class viewCard extends Component {

    constructor(props){
        super(props)
        this.state ={
            product_id: this.props.match.params.id,
            categories: [],
            cat_id:'',
            seller_id:'',
            name: '',
            details: '',
            opening_date:'',
            closing_date:'',
            min_bid:'',
            status:'UNSOLD',
            img:'',
            cat_name:''
        }
    }

    componentDidMount(){
        trialservice.getProductById(this.props.match.params.id).then( (res) =>{
            let product = res.data;
            this.setState({name: product.name,
                product_id: product.product_id,
                cat_id: product.cat_id,
                seller_id: product.seller_id,
                details: product.details,
                opening_date: product.opening_date,
                closing_date: product.closing_date,
                min_bid: product.min_bid,
                status: product.status,
                img: product.img
            });
        });
        trialservice.getCategory().then( (res) =>{
            this.setState({categories: res.data});
        });
        this.setState({cat_name: this.state.categories[this.state.cat_id]});
    }

    getImage(img){
        if(img == null){
            return "https://media.discordapp.net/attachments/997764811582619729/1021759954291535932/nodata.jpg?width=703&height=703";
        }
        const imagelink = "http://localhost:8080/api/upload/" + img;
        return imagelink; 
    }

    selfProduct(){
        let userid = sessionStorage.getItem('user_id');
        if(userid == this.state.seller_id){
            return  <div>
                        <button className='btn btn-danger text-uppercase mr-2 px-4' disabled>Bid On Product</button>
                        <p className='text-danger'> Sorry You Can't Bid On Your Own Posted Product</p>
                    </div>;
        }
        else{
            return  <div className='cart mt-4 align-items-center'> 
                        <button className='btn btn-danger text-uppercase mr-2 px-4'>Bid On Product</button> 
                    </div>;
        }
    }


    render() {

        return (
            
            <>
                <div className='container mt-5 mb-5'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-10'>
                            <div className='card'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='images p-3'>
                                            <div className='text-center p-4'> 
                                                <img id='main-image' className='myimage' src={this.getImage(this.state.img)} width='250' /> 
                                            </div>
                                            <div className='thumbnail text-center'> 
                                                <img onclick='change_image(this)' src={this.getImage(this.state.img)} width='70' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                    <div className='product p-4'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='d-flex align-items-center'>  
                                                <span className='ml-1'>
                                                    <a href='/product'>
                                                        <button type="button" className='btn btn-primary' >
                                                            <i className='far fa-arrow-alt-circle-left'>&nbsp;Back</i>
                                                        </button>
                                                    </a>
                                                </span> 
                                            </div> 
                                                <i className='fa fa-shopping-cart text-muted'></i>
                                            </div>
                                            <div className='mt-4 mb-3'> 
                                                <span className='text-uppercase text-muted brand'>{this.state.cat_name}</span>
                                                <h5 className='text-uppercase'>{this.state.name}</h5>
                                                <div className='price d-flex flex-row align-items-center'> 
                                                    <span className='act-price'><b className='h5'>&#8377;&nbsp;{this.state.min_bid}</b></span>
                                                    <div className='ml-2'> 
                                                        <small className='dis-price'></small> 
                                                        <span className='text-dark'>Bid Starting Price</span> 
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='about'>{this.state.details}</p>
                                            <div className='sizes mt-5'>
                                            </div>
                                            {
                                                this.selfProduct()
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
               
        );
    }
}

