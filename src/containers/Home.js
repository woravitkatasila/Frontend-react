import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Moniter from "../components/Home/Moniter";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { usersFetch } from "../actions/index";
class Home extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.usersFetch();
		console.log(this.props.users)
	}

	render() {
		return (
			<div>
				<Header />
				<Moniter users={this.props.users}/>
				<Footer myname="woravit katasila" email="woravit5972@gmail.com" />
			</div>
		)
	}
}

function mapStateToProps({users}) {
	return { users };
}

/*function mapDispatchToProps (dispatch) {
	return { usersFetch };
}*/



export default withRouter(connect(mapStateToProps, {usersFetch})(Home));
