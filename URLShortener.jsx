import React, { useState } from "react";

function URLShortener({ urls, setUrls }) {
  const [entries, setEntries] = useState([{ long: "", custom: "", expiry: "" }]);

  const handleChange = (i, field, value) => {
    const copy = [...entries];
    copy[i][field] = value;
    setEntries(copy);
  };

  const shorten = () => {
    const newUrls = entries
      .filter(e => e.long)
      .map(e => {
        let code = e.custom || Math.random().toString(36).substring(2, 8);
        while (urls.find(u => u.code === code)) {
          code = Math.random().toString(36).substring(2, 8);
        }
        const expiryTime = e.expiry ? Date.now() + e.expiry * 60000 : null;
        return { ...e, code, expiryTime };
      });

    setUrls([...urls, ...newUrls]);
    setEntries([{ long: "", custom: "", expiry: "" }]);
  };

  return (
    <div style={{ background: "#fff", padding: 20, borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", maxWidth: 600, margin: "20px auto" }}>
      {entries.map((e, i) => (
        <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
          <input
            value={e.long}
            placeholder="Long URL"
            onChange={ev => handleChange(i, "long", ev.target.value)}
            style={{ flex: 2, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          />
          <input
            value={e.custom}
            placeholder="Custom code"
            onChange={ev => handleChange(i, "custom", ev.target.value)}
            style={{ flex: 1, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          />
          <input
            type="number"
            value={e.expiry}
            placeholder="Expiry (min)"
            onChange={ev => handleChange(i, "expiry", ev.target.value)}
            style={{ width: 100, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        {entries.length < 5 && (
          <button onClick={() => setEntries([...entries, { long: "", custom: "", expiry: "" }])}
                  style={{ padding: "8px 16px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: 4 }}>
            + Add
          </button>
        )}
        <button onClick={shorten}
                style={{ padding: "8px 16px", backgroundColor: "#2ecc71", color: "white", border: "none", borderRadius: 4 }}>
          Shorten
        </button>
      </div>
    </div>
  );
}

export default URLShortener;
