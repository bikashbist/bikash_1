import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

class Nav extends Component{


  Logout = (e) => {
    localStorage.removeItem('Token');
    this.props.history.push('/');
    

}

  render(){
    const {user}=this.props
    
    return(
      <div className="top-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
        
                  <Link className="navbar-brand" to="candidate_dashbord"> <img className="logo-img" src="/Vlogo.jpg" alt="logo" /> </Link>
                    

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <Link className="nav-link profile-page" to="/profile">{user} Profile Page</Link>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit"  onClick={this.Logout}>Logout</button>
            </form>
          </div>
        </nav>

      </div>
      </div>
    )
  }
}



export default Nav;
