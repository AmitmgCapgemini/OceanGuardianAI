import { useState } from "react";

function App() {

  const [region, setRegion] = useState("Indonesia");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const analyzeQuestion = () => {
    setLoading(true);

    setTimeout(() => {
      setShowAnalysis(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>?? OceanGuardian AI</h1>

      <h2>Protecting Oceans Through Intelligent Conservation</h2>

      <div style={{ marginTop: "20px" }}>
        <label>
          <strong>Select Region</strong>
        </label>

        <br />

        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          style={{
            marginTop: "10px",
            padding: "10px",
            width: "250px",
          }}
        >
          <option>Indonesia</option>
          <option>Coral Triangle</option>
          <option>Pacific Ocean</option>
          <option>Indian Ocean</option>
          <option>Caribbean Sea</option>
        </select>
      </div>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask OceanGuardian a conservation question..."
        rows={6}
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "10px",
        }}
      />

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={analyzeQuestion}
          style={{
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

        <button
          style={{
            marginLeft: "10px",
            padding: "12px 24px",
            backgroundColor: "#2e7d32",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Generate Report
        </button>
      </div>

      {loading && (
        <p style={{ marginTop: "20px" }}>
          Analyzing marine conservation data...
        </p>
      )}

      {showAnalysis && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            backgroundColor: "#f4f9ff",
            borderRadius: "10px",
          }}
        >
          <h3>Conservation Metrics</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "15px",
            }}
          >
            <div>
              <h2>95</h2>
              <p>Biodiversity</p>
            </div>

            <div>
              <h2>92</h2>
              <p>Threat</p>
            </div>

            <div>
              <h2>87</h2>
              <p>Protection Gap</p>
            </div>

            <div>
              <h2>91</h2>
              <p>Priority</p>
            </div>
          </div>

          <hr />

          <h3>Conservation Insight</h3>

          <p>
            <strong>Selected Region:</strong> {region}
          </p>

          <p>
            <strong>Priority Region:</strong> Coral Triangle
          </p>

          <p>
            <strong>Threat Level:</strong> High
          </p>

          <p>
            <strong>Protection Coverage:</strong> 18%
          </p>

          <p>
            <strong>Conservation Priority Score:</strong> 92 / 100
          </p>

          <p>
            <strong>Recommended Action:</strong> Expand Marine Protected Area coverage.
          </p>

          <p>
            <strong>Why This Region?</strong> High biodiversity concentration and elevated fishing pressure.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
