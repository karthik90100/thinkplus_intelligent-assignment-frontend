import { useState } from "react";
import api from "../../api/api";

function SubmitAssignment() {
    const assignmentId = window.location.pathname.split("/").pop();
    const user = JSON.parse(localStorage.getItem("user"));
    const [content, setContent] = useState("");

    const submit = async () => {
        try {
            await api.post("/submissions/submit", {
                assignmentId,
                studentId: user._id,
                content,
            });
            alert("Assignment submitted successfully");
            window.location.href = "/student";
        } catch (err) {
            alert("Submission failed");
            console.error(err);
        }
    };

    return (
        <div>
            <h3>Submit Assignment</h3>

            <textarea
                rows="8"
                placeholder="Enter your assignment text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <br />

            <button onClick={submit}>Submit</button>
        </div>
    );
}

export default SubmitAssignment;
