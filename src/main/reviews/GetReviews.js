import React, { useEffect } from 'react';
import axios from "axios";
import { useHttpClient } from "../../shared/hooks/http-hook";

function GetReviews(props) {
	const { isLoading, error, sendRequest } = useHttpClient();
	const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${process.env.REACT_PLACE_ID}&key=${process.env.REACT_API_KEY}`;
	// console.log(url)
	// useEffect(() => {
	// 	const fetchUsers = async () => {
	// 		try {
	// 			const responseData = await sendRequest(
	// 				url,
	// 				{
	// 					'Content-Type': 'application/json'
	// 				}
	// 			);
	// 			console.log(responseData)
	// 		} catch (err) { }
	// 	};
	// 	fetchUsers();

	// }, []);

	return (
		<div>

		</div>
	);
}

export default GetReviews;