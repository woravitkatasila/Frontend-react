import React, { Component } from "react";
import { Link } from "react-router-dom";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Header extends Component {
  constructor(props) {
    super(props);
//this.state = { date: new Date() };
  }

  componentDidMount() {
    //this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() { }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // this.state = {date : new Date()};
   // this.setState({ date: new Date() });
  }

  render() {
    return (

      <div className="container-fluid bg-white">
       <div className="row">
          <div className="col-md-4 col-12 ">
          </div>
          <div className="col-md-4 col-12 text-md-left text-center">
            <h1 className="text-white mt-md-4 mt-2">
            <img style={{ height: 100 }} src="/images/logo/logo.png"/>
            </h1>
          </div>
          <div className="col-md-4">
          </div>
          </div>
          <div className="row">
          <div className="col-md-4 col-12 ">
          </div>
          <div className="col-md-4 col-12 text-md-left text-center">
            <ul className="list-inline">
            <li className="list-inline-item title"><button type="button" class="btn btn-white"> 
               <Link className="text-success" to="" style={{fontSize:"25px"}}> <FontAwesomeIcon icon={['fas', 'user']}  size="lg"/></Link></button></li>
                <li className="list-inline-item title"><button type="button" class="btn btn-white"> 
               <Link className="text-success" to="" style={{fontSize:"25px"}}> <FontAwesomeIcon icon={['fas', 'comment']}  size="lg"/></Link></button></li>
               <li className="list-inline-item title"><button type="button" class="btn btn-white"> 
               <Link className="text-success" to="" style={{fontSize:"25px"}}> <FontAwesomeIcon icon={['fas', 'user-plus']}  size="lg"/></Link></button></li>

            </ul>  
         
          </div>
          <div className="col-md-4">
          </div>
          </div>
      
        <hr /> 
      </div>
    );
  }
}

export default Header;
