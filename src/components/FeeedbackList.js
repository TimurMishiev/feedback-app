import FeedbackItem from "./FeedbackItem";

function FeeedbackList({ feedback, handleDelete }) {
	if (!feedback || feedback.legnth === 0) {
		return <p>No Feedback Yet</p>;
	}
	return (
		<div className="feedback-list">
			{feedback.map((item) => (
				<FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
			))}
		</div>
	);
}

export default FeeedbackList;
