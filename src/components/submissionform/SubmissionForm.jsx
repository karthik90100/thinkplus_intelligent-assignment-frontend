import { useState } from "react";
import "./SubmissionForm.css";

const SubmissionForm = () => {
  const [answer, setAnswer] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert("Assignment Submitted");
    setAnswer("");
  };

  return (
    <form className="card submission-form" onSubmit={submit}>
      <h3>Submit Assignment</h3>

      <textarea
        rows="5"
        placeholder="Enter your answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmissionForm;
