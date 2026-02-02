import React, { useEffect, useState } from "react";

const EmailLogs = () => {
  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState("");

  const fetchLogs = async () => {
    const res = await fetch("http://localhost:5000/api/email-logs");
    const data = await res.json();
    setLogs(data);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  // 🔁 Resend email
  const resendEmail = async (id) => {
    await fetch(`http://localhost:5000/api/email-logs/resend/${id}`, {
      method: "POST",
    });
    alert("Email resent successfully");
  };

  // 🗑️ Delete log
  const deleteLog = async (id) => {
    if (!window.confirm("Delete this email log?")) return;

    await fetch(`http://localhost:5000/api/email-logs/${id}`, {
      method: "DELETE",
    });

    setLogs((prev) => prev.filter((log) => log._id !== id));
  };

  // 🔍 Search filter
  const filteredLogs = logs.filter((log) =>
    log.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>📧 Sent Emails</h2>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "15px", width: "300px" }}
      />

      {/* TABLE */}
      <table width="100%" border="1" cellPadding="8">
        <thead style={{ background: "#f4f4f4" }}>
          <tr>
            <th>Email</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredLogs.length === 0 && (
            <tr>
              <td colSpan="5" align="center">
                No emails found
              </td>
            </tr>
          )}

          {filteredLogs.map((log) => (
            <tr key={log._id}>
              <td>{log.to}</td>
              <td>{log.subject}</td>
              <td>{log.status}</td>
              <td>{new Date(log.sentAt).toLocaleString()}</td>
              <td>
                <button onClick={() => resendEmail(log._id)}>
                  Resend
                </button>

                <button
                  onClick={() => deleteLog(log._id)}
                  style={{
                    marginLeft: "8px",
                    background: "red",
                    color: "white",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailLogs;
