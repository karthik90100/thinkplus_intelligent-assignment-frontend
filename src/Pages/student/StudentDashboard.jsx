import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import "./StudentDashboard.css";

function StudentDashboard() {
    const [assignments, setAssignments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api
            .get("/assignments")
            .then((res) => setAssignments(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="student-dashboard">
            {/* Header */}
            <div className="dashboard-header">
                <h2>
                    Student <span>Dashboard</span>
                </h2>
                <p>Submit assignments and track evaluation status</p>
            </div>

            {/* Assignments Section */}
            <div className="dashboard-card">
                {assignments.length === 0 ? (
                    <p className="empty-text">No assignments available</p>
                ) : (
                    assignments.map((a) => (
                        <div key={a._id} className="assignment-row">
                            <div>
                                <h4>{a.title}</h4>
                                <p>Submit text or PDF for AI evaluation</p>
                            </div>

                            <button
                                className="btn-primary"
                                onClick={() =>
                                    navigate(`/student/submit/${a._id}`)
                                }
                            >
                                Submit Assignment
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* Actions */}
            <div className="dashboard-actions">
                <button
                    className="btn-outline"
                    onClick={() => navigate("/student/status")}
                >
                    View Submission Status
                </button>

                <button
                    className="btn-outline"
                    onClick={() => navigate("/student/feedback")}
                >
                    View Feedback
                </button>
            </div>
        </div>
    );
}

export default StudentDashboard;
