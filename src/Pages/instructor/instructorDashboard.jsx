import "./instructorDashboard.css";

import AssignmentForm from "../../components/assignmentform/AssignmentForm";
import BackButton from "../../components/backbutton/BackButton";

const InstructorDashboard = () => {
    const createAssignment = (assignmentData) => {
        console.log("Assignment Created:", assignmentData);
        alert("Assignment created successfully!");
        // Later: connect backend API here
    };

    return (
        <div className="instructor-page">
            <BackButton />

            <h2 className="instructor-title">Instructor Dashboard</h2>

            <div className="instructor-content">
                <AssignmentForm onCreate={createAssignment} />
            </div>
        </div>
    );
};

export default InstructorDashboard;   // ✅ REQUIRED
