import React from 'react';


function logout(){
  sessionStorage.clear();
  window.location.reload(false);
}

function loginbtn(){
  var username = sessionStorage.getItem('user_name');
  if(username != undefined){
    return  <div className='offset-md-7'>
              <i className='fas fa-id-card-alt text-light p-2'/>
              <b className='text-success '>{username}</b> 
              &nbsp; &nbsp;
              <button className='btn btn-danger' onClick={()=>logout()} >Logout</button>
            </div>;
  }
  else{
    return  <a href='/login' className='btn btn-primary offset-md-7' role="button">Login</a>;
  }
}

export default function Navbar() {

  

    return (<>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark' >
              <a className='navbar-brand' href='/'>E-Auction</a>
              <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navbar-nav'>
              <a className='nav-item nav-link' href='/product'>Home</a>
              <a className='nav-item nav-link' href='/myproduct'>MY Products</a>
              <a className='nav-item nav-link' href='/aboutus'>About Us</a>
              <a className='nav-item nav-link' href='/help'>Help</a>
              <a className='nav-item nav-link' href='/faq'>FAQ</a>
            </div>

            {
              loginbtn()
            }
          </div>
        </nav></>
    )
}