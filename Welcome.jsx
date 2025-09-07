import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <header className="hero">
        <div className="hero-content">
          <h1>🏥 Hospital Management System</h1>
          <p className="subtitle">
            Manage patients, tests, and records with a fast, simple, and secure workflow.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/insert">➕ Add Patient</Link>
            <Link className="btn outline" to="/select">🔎 View Records</Link>
          </div>
        </div>
      </header>

      <section className="cards">
        <div className="card">
          <h3>👤 Register / Insert</h3>
          <p>Add new patient details including contact, tests, and billing info.</p>
          <Link className="card-link" to="/insert">Go to Insert →</Link>
        </div>
        <div className="card">
          <h3>✏️ Update</h3>
          <p>Edit blood test, sugar test, dates or other patient information.</p>
          <Link className="card-link" to="/update">Go to Update →</Link>
        </div>
        <div className="card">
          <h3>📄 Select</h3>
          <p>Search and view existing patient records quickly.</p>
          <Link className="card-link" to="/select">Go to Select →</Link>
        </div>
        <div className="card">
          <h3>🗑️ Delete</h3>
          <p>Remove a patient record safely when required.</p>
          <Link className="card-link" to="/delete">Go to Delete →</Link>
        </div>
      </section>

      <section className="info">
        <h2>Why this system?</h2>
        <ul>
          <li>✅ Easy data entry with validation</li>
          <li>🔐 Secure API communication</li>
          <li>⚡ Fast access to patient history</li>
          <li>🧪 Supports lab-test updates</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Hospital Management System • All rights reserved</p>
      </footer>
    </div>
  );
};

export default Welcome;
