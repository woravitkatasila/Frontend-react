import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() { }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // this.state = {date : new Date()};
    this.setState({ date: new Date() });
  }

  render() {
    return (

      <div className="container-fluid bg-dark">
       <div className="row">
          <div className="col-md-5 col-12 text-md-left text-center d-none d-md-block">
            <h1 className="text-white mt-md-3 ml-md-5">
              <img style={{ height: 80 }} src="/images/logo/logo.jpg"/>
            </h1>
              
          </div>
          <div className="col-md-3 col-12 text-md-left text-center">
            <h1 className="text-white mt-md-4 mt-2">
              PANEE SHOP
            </h1>
          </div>
          <div className="col-md-4 col-12 text-md-right text-center mt-md-3">
            <ul className="list-inline">
                <li className="list-inline-item title"><Link className="text-white" to="">หน้าหลัก</Link></li>
                <li className="list-inline-item title">|</li>
                <li className="list-inline-item title"><Link className="text-white" to="/orders">รายการสั่งซื้อ</Link></li>
                <li className="list-inline-item title">|</li>
                <li className="list-inline-item title"><Link className="text-white" to="/products">สินค้า</Link></li>
                <li className="list-inline-item title">|</li>
                <li className="list-inline-item title"><Link className="text-white" to="/about">ออกจากระบบ</Link></li>
            </ul>  
            <h5 className="text-white">
                {this.state.date.toLocaleTimeString()}
            </h5>
          </div>
        </div>
        <hr /> 
      </div>
    );
  }
}

export default Header;
