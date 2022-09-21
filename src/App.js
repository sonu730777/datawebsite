import React from 'react';
import BarChart from './BarChart';
import ScatterPlot from './ScatterPlot';




function App() {
  return (
    <div
    style={{
      display: "flex",
      flexWrap: "wrap"
    }}
    className="App"
  >
      <BarChart/>
      <ScatterPlot/> 
         
    </div>
    
  );
}

export default App;
