import React, { useState } from "react";
import URLShortener from "./URLShortener";
import Statistics from "./Statistics";

function App() {
  const [urls, setUrls] = useState([]);

  return (
    <div style={{ padding: 30, fontFamily: "Arial, sans-serif", backgroundColor: "#f0f4f8", minHeight: "100vh" }}>
      <h2 style={{ color: "#2c3e50", textAlign: "center" }}>🌐 URL SHORTNER BY  AJAY K 212222080005 MECHANICAL ENGINEERING</h2>
      <URLShortener urls={urls} setUrls={setUrls} />
      <Statistics urls={urls} />
    </div>
  );
}

export default App;
