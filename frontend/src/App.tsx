import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(false);
  const [loading, setLoading] = useState(false);

  const analyzeQuestion = () => {
    setLoading(true);

    setTimeout(() => {
      setResponse(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>🌊 OceanGuardian AI</h1>

      <h2>Protecting Oceans Through Intelligent Conservation</h2>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask OceanGuardian a conservation question..."
        rows={5}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "20px",
        }}
      />

      <button
        onClick={analyzeQuestion}
        style={{
          marginTop: "15px",
          padding: "12px 24px",
          backgroundColor: "#0077b6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Analyze
      </button>

      {loading && (
        <p
          style={{
            marginTop: "20px",
            color: "#0077b6",
            fontWeight: "bold",
          }}
        >
          Analyzing marine conservation data...
        </p>
      )}

      {response && (
        <div
          style={{
            marginTop: "30px",
            padding: "25px",
            backgroundColor: "#f4f9ff",
            border: "1px solid #d0e6f7",
            borderRadius: "12px",
            textAlign: "left",
          }}
        >
          <h3>Conservation Insight</h3>

          <hr />

          <p>
            <strong>Priority Region</strong><br />
            Coral Triangle
          </p>

          <p>
            <strong>Threat Level</strong><br />
            🔴 High
          </p>

          <p>
            <strong>Protection Coverage</strong><br />
            18%
          </p>

          <p>
            <strong>Conservation Priority Score</strong><br />
            92 / 100
          </p>

          <p>
            <strong>Recommended Action</strong><br />
            Expand Marine Protected Area coverage and prioritize coral reef conservation.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
