import React, { useState } from "react";
import axios from "axios";
import "./Delete.css";   // optional CSS

const deleteApi = "http://localhost:9559/delete";   // backend delete URL

const Delete = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!name.trim()) {
      setMessage("Please enter a name to delete");
      return;
    }

    if (!window.confirm(`Are you sure you want to delete user: ${name}?`)) {
      return;
    }

    try {
      // Send name as query parameter
      const response = await axios.delete(deleteApi, {
        params: { name }
      });

      // Assuming backend returns number of rows deleted or similar
      if (response.data > 0) {
        setMessage(`✅ User "${name}" deleted successfully`);
      } else {
        setMessage(`❌ User "${name}" not found or could not be deleted`);
      }

      setName("");
    } catch (err) {
      console.error("Error deleting user:", err);
      setMessage("❌ Failed to delete user. Please check backend logs or CORS settings.");
    }
  };

  return (
    <div className="delete-container">
      <h2>Delete User by Name</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Delete;
