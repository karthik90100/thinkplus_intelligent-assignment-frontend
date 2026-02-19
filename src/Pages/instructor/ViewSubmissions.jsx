const React = require("react");
const { useEffect, useState } = React;
const api = require("../../api/api");

function ViewSubmissions() {
    const [assignments, setAssignments] = useState([]);
    const [submissions, setSubmissions] = useState([]);
    const [selectedAssignment, setSelectedAssignment] = useState(null);

    // fetch assignments created by instructor
    useEffect(() => {
        api.get("/assignments").then(res => setAssignments(res.data));
    }, []);

    // fetch submissions for selected assignment
    const loadSubmissions = async (assignmentId) => {
        setSelectedAssignment(assignmentId);
        const res = await api.get(`/submissions/assignment/${assignmentId}`);
        setSubmissions(res.data);
    };

    return (
        <div>
            <h2>Instructor – View Submissions</h2>

            <h3>Your Assignments</h3>
            {assignments.map(a => (
                <div key={a._id}>
                    <b>{a.title}</b>
                    <button onClick={() => loadSubmissions(a._id)}>
                        View Submissions
                    </button>
                </div>
            ))}

            {selectedAssignment && (
                <>
                    <h3>Submissions</h3>

                    {submissions.length === 0 && <p>No submissions yet</p>}

                    {submissions.map(s => (
                        <div key={s._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                            <p><b>Student:</b> {s.studentId.name}</p>
                            <p><b>Email:</b> {s.studentId.email}</p>
                            <p><b>Score:</b> {s.score}</p>
                            <p><b>Plagiarism:</b> {s.plagiarismRisk}</p>
                            <p><b>Feedback:</b> {s.feedback}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

module.exports = ViewSubmissions;
