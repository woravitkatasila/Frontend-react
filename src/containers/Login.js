import React, { Component } from "react";
import Loginform from "../components/Login/Loginform";
class Login extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div>
				<Loginform />
			</div>
		)
	}
}

/*
function mapStateToProps({ users }) {
	return { users };
}

export default withRouter(connect(mapStateToProps, { productsFetch, productDelete })(Loginform));*/
export default Login;