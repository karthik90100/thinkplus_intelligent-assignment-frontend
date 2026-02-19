import "./AssignmentCard.css";

const AssignmentCard = ({ assignment }) => {
    return (
        <div className="assignment-card">
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
        </div>
    );
};

export default AssignmentCard;
