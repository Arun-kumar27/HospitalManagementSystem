import React, { useState } from "react";
import axios from "axios";
import "./Sel.css";   // make sure this file is in the same folder

const api = "http://localhost:9559/get";

const Select = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setError("");
  };

  const handleSearch = async () => {
    if (!value.trim()) {
      setError("Please enter name, email, or gender");
      return;
    }

    try {
      const { data } = await axios.get(api, {
        params: { value }
      });

      if (data && data.length > 0) {
        setResults(data);
        setError("");
      } else {
        setResults([]);
        setError("No user found with the given value");
      }
    } catch (err) {
      console.error("Error:", err);
      setResults([]);
      setError("Something went wrong while fetching data");
    }
  };

  return (
    <div className="form-container">
      <h2>Search User</h2>
      <input
        type="text"
        placeholder="Enter name, gender, or emailid"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p className="error">{error}</p>}

      {results.length > 0 && (
        <div className="results">
          <h3>Search Results:</h3>
          <ul>
            {results.map((user) => (
              <li key={user.id}>
                <strong>Name:</strong> {user.name} <br />
                <strong>Email:</strong> {user.emailid} <br />
                <strong>Gender:</strong> {user.gender} <br />
                <strong>Address:</strong> {user.address} <br />
                <strong>Age:</strong> {user.age} <br />
                <strong>Feez:</strong> {user.feez} <br />
                <strong>Blood Test:</strong> {user.bloodtest} <br />
                <strong>Sugar Test:</strong> {user.sugartest} <br />
                <strong>Number:</strong> {user.number} <br />
                <strong>Date:</strong> {user.date} <br />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
