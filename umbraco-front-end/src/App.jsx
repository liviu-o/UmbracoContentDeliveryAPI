import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const url = "https://localhost:44354/umbraco/delivery/api/v1/content";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const newData = await response.json();
      setData(newData.items);
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id} className="text-red-500 underline">
              <p>Product Name: {item.properties.productName}</p>
              <p>Product Description: {item.properties.productDescription}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
