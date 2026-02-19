import "./FeedbackCard.css";

const FeedbackCard = ({ feedback }) => {
    return (
        <div className="feedback-card">
            <h3>Evaluation Result</h3>

            <div className="feedback-row">
                <span className="label">Score</span>
                <span className="value">{feedback.score}</span>
            </div>

            <div className="feedback-row">
                <span className="label">Plagiarism Risk</span>
                <span className="value plagiarism">
                    {feedback.plagiarism}%
                </span>
            </div>

            <div className="feedback-comment">
                {feedback.comment}
            </div>
        </div>
    );
};

export default FeedbackCard;
