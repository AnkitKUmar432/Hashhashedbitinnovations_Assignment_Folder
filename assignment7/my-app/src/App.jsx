import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApiEndPoint = async () => {
      try {
        let response = await fetch(
          "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
        );
        let jsonData = await response.json();
        let sortedData = jsonData.sort((a, b) => a.NRR - b.NRR);
        setData(sortedData);
      } catch (error) {
        console.error("Something went wrong:", error);
      }
    };

    fetchDataFromApiEndPoint();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "#f8f9fa",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        IPL Season 2022 Points
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#555",
          fontSize: "16px",
          marginBottom: "20px",
          fontStyle: "italic",
        }}
      >
        IPL Teams are arranged in ascending order based on NRR
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ backgroundColor: "#007BFF", color: "white" }}>
          <tr>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>No</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Team</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Matches</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Won</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Lost</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Tied</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>NRR</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Points</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.No}>
              <td style={{ padding: "10px", border: "1px solid #ddd", color: "green" }}>
                {item.No}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd", color: "orange" }}>
                {item.Team}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd", color: "gray" }}>
                {item.Matches}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd", color: "green" }}>
                {item.Won}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd", color: "red" }}>
                {item.Lost}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd", color: "orange" }}>
                {item.Tied}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd", color: "blue" }}>
                {item.NRR}
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                  color: "brown",
                }}
              >
                {item.Points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
