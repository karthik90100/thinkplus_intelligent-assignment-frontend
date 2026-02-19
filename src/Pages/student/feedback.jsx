import React, { useEffect, useState } from "react";
import api from "../../api/api";

function Feedback() {
    const submissionId = window.location.pathname.split("/").pop();
    const [data, setData] = useState(null);

    useEffect(() => {
        api.get(`/submissions/feedback/${submissionId}`)
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, []);

    if (!data) return <p>Loading...</p>;

    return (
        <div>
            <h3>Feedback</h3>
            <p><b>Score:</b> {data.score}</p>
            <p><b>Plagiarism Risk:</b> {data.plagiarism_risk}</p>
            <p><b>Feedback:</b> {data.feedback_summary}</p>
        </div>
    );
}

export default Feedback;
