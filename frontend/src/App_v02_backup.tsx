import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const analyzeQuestion = () => {
    setResponse(`
Priority Region: Coral Triangle

Threat Level: High

Protection Coverage: Low

Recommendation:
Expand Marine Protected Area coverage and prioritize coral reef conservation.
    `);
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
      <h1>OceanGuardian AI</h1>

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

      {response && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#f4f9ff",
            borderRadius: "8px",
          }}
        >
          <h3>Conservation Insight</h3>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "Arial",
            }}
          >
            {response}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
