import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Slider } from "primereact/slider";

import { Splitter, SplitterPanel } from "primereact/splitter";

function App() {
  const [value, setValue] = useState(null);
  const[users , setUsers] = useState([])

  const fetchData = async()=>{
    const response = await fetch("http://localhost:5000/users")
    const data = await response.json();
    // console.log(data)

  } 
  useEffect(()=>{
    fetchData();
  },[])
  return (

    <>
      <div className="App">
      <Splitter style={{ height: '100vh', width: "100vw" }}>
      <SplitterPanel size={80}>
        <Splitter layout="vertical">
          <SplitterPanel size={85}>
            <Splitter>
              <SplitterPanel
                className="flex align-items-center justify-content-center"
                size={20}
              >
                Panel 1
              </SplitterPanel>
              <SplitterPanel
                className="flex align-items-center justify-content-center"
                size={80}
              >
                Panel 2
              </SplitterPanel>
            </Splitter>
          </SplitterPanel>
          <SplitterPanel
            className="flex align-items-center justify-content-center"
            size={15}
          >
            Panel 3
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
      </div>
    </>
  );
}

export default App;
