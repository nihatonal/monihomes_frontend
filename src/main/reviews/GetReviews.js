import React, { useEffect } from 'react';
import axios from "axios";
import { useHttpClient } from "../../shared/hooks/http-hook";

function GetReviews(props) {
	const { isLoading, error, sendRequest } = useHttpClient();
	const placeId = 'ChIJh_WzFH1BwBQRKxywcvDfSMs';
	const apiKey = 'AIzaSyDLvSBaiQXgIr8tGfI1qIS23GP3ymL5cZk';
	const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;

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