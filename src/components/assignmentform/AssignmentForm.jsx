import { useState } from "react";
import "./AssignmentForm.css";

const AssignmentForm = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill all required fields");
      return;
    }

    onCreate({
      title,
      description,
      deadline
    });

    // reset form
    setTitle("");
    setDescription("");
    setDeadline("");
  };

  return (
    <div className="card assignment-form">
      <h3>Create Assignment</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Assignment Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          rows="4"
          placeholder="Assignment Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <button type="submit">Create Assignment</button>
      </form>
    </div>
  );
};

export default AssignmentForm;
