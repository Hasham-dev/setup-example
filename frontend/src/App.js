import React, { useState, useEffect } from "react";

function App() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // Make the API call when the component mounts
    fetch("http://localhost:5555/signup")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array ensures the API call is made only once when the component mounts

  return (
    <div>
      {responseData ? <pre>{responseData?.name}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default App;
