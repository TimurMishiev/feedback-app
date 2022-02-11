import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";

function App() {
	const [feedback, setFeedback] = useState();

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackList feedback={feedback} />
			</div>
		</>
	);
}

export default App;
