import React from "react";

function Statistics({ urls }) {
  return (
    <div style={{ background: "#fff", padding: 20, borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", maxWidth: 600, margin: "20px auto" }}>
      <h3 style={{ color: "#2c3e50", marginBottom: 10 }}>🔗 Shortened URLs</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {urls.map((u, i) => (
          <li key={i} style={{ marginBottom: 8, padding: 8, backgroundColor: "#ecf0f1", borderRadius: 4 }}>
            <a href={u.long} target="_blank" rel="noreferrer" style={{ color: "#2980b9", fontWeight: "bold" }}>
              {window.location.origin}/#{u.code}
            </a>
            <div style={{ fontSize: 12 }}>
              → {u.long}
              {u.expiryTime && (
                <span style={{ marginLeft: 10 }}>
                  (Expires: {new Date(u.expiryTime).toLocaleTimeString()})
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Statistics;
