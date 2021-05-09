import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Moniter from "../components/Home/Moniter";
class Home extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div>
				<Header />
				<Moniter />
				<Footer myname="woravit katasila" email="woravit5972@gmail.com" />
			</div>
		)
	}
}


export default Home;
