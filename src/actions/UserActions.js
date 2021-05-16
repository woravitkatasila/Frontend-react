import axios from "axios";
import { USERS_FETCH } from "./types";

export const usersFetch = () => {
	return dispatch => {
		axios.get("http://localhost:8000/user")
		.then(res => dispatch({ type: USERS_FETCH, payload: res.data}))};
 	
};

/*
export const userDelete = id => {
	return dispatch => {
		axios.delete("http://localhost:3001/orders/" + id).then(res => {
			axios.get("http://localhost:3001/orders")
				.then(res =>
					dispatch({ type: ORDERS_FETCH, payload: res.data })
				);
		});
	};
};*/
