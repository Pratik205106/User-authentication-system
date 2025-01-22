import React, { useEffect, useState } from 'react';

const Fetch = () => {
  const [data, setData] = useState([]); // Declare state outside of any function to avoid scoping issues.

  useEffect(() => {
    FetchData(); // Automatically fetch data when the component loads.
  }, []); // Empty dependency array ensures this runs only once.

  async function FetchData() {
    try {
      const res = await fetch("http://localhost:3000/"); // Ensure the URL is correct and reachable.
      const result = await res.json();
      setData(result); // Update the state with the fetched data.
      console.log(result); // Log the result for debugging purposes.
    } catch (error) {
      console.error("Error fetching data:", error); // Log any fetch errors.
    }
  }

  return (
    <div>
      <button onClick={FetchData} className="m-24 bg-blue-800 text-white p-4 rounded-lg">
        Fetch data
      </button>
      <ul>
        {data.map((value, i) => (
          <li key={i}>{value.name}</li> // Add a unique key and ensure proper capitalization.
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
