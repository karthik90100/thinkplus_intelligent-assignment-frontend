const React = require("react");
const { useState } = React;
const api = require("../../api/api");

function CreateAssignment() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const create = async () => {
        await api.post("/assignments/create", { title, description });
        alert("Assignment Created");
    };

    return (
        <div>
            <h3>Create Assignment</h3>
            <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
            <textarea onChange={e => setDescription(e.target.value)} />
            <button onClick={create}>Create</button>
        </div>
    );
}

module.exports = CreateAssignment;
