import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function aboutPage() {
	return (
		<Card>
			<div className="about">About This page </div>;
			<p>This is a React app to leave feedbacks for our products.</p>
			<p>
				<Link to="/">Back To Home</Link>
			</p>
		</Card>
	);
}

export default aboutPage;
