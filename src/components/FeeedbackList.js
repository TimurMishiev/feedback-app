import FeedbackItem from "./FeedbackItem";

function FeeedbackList({ feedback }) {
	if (!feedback || feedback.legnth === 0) {
		return <p>No Feedback Yet</p>;
	}
	return (
		<div className="feedback-list">
			{feedback.map((item) => (
				<FeedbackItem key={item.id} item={item} />
			))}
		</div>
	);
}

export default FeeedbackList;
