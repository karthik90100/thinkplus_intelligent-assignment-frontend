import { useEffect, useState } from "react";
import api from "../../api/api";

function SubmissionStatus() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [status, setStatus] = useState([]);

    useEffect(() => {
        if (!user?._id) return;

        api
            .get(`/submission-status/student/${user._id}`)
            .then((res) => setStatus(res.data))
            .catch((err) => console.error(err));
    }, [user]);

    return (
        <div>
            <h3>Submission Status</h3>

            {status.length === 0 && <p>No submissions yet</p>}

            {status.map((s) => (
                <div key={s._id}>
                    <p>Status: {s.status}</p>
                    {s.submissionId && (
                        <button
                            onClick={() =>
                                (window.location.href = `/student/feedback/${s.submissionId._id}`)
                            }
                        >
                            View Feedback
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default SubmissionStatus;
