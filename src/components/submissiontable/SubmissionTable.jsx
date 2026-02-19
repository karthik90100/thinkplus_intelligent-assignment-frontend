import "./SubmissionTable.css";

const SubmissionTable = ({ submissions }) => {
    if (!submissions || submissions.length === 0) {
        return <p>No submissions yet.</p>;
    }

    return (
        <div className="table-card">
            <h3>Student Submissions</h3>

            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Score</th>
                        <th>Plagiarism Risk</th>
                        <th>Feedback</th>
                    </tr>
                </thead>

                <tbody>
                    {submissions.map((sub) => (
                        <tr key={sub.id}>
                            <td>{sub.studentName}</td>
                            <td>{sub.studentEmail}</td>
                            <td>
                                <span className="score">{sub.score}</span>
                            </td>
                            <td>
                                <span className="plagiarism">
                                    {sub.plagiarismRisk}%
                                </span>
                            </td>
                            <td>{sub.feedback}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubmissionTable;
