import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  const getData = async () => {
    const rawData = await fetch("http://127.0.0.1:8000/account/health", {mode: "no-cors"});
    const jsonData = await rawData.json();
    setData(jsonData);
  };

  useEffect(()=>{
    getData();
  })

  return (
    <div className="App">
      Hello
      {data}
    </div>
  );
}

export default App;
