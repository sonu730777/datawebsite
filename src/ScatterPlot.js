import ReactEChart from "echarts-for-react";
import React from "react";
import { WineData } from "./data";

export default function ScatterPlot() {

  const totaldata =Object.values(WineData);
  const totalTypesOfWines=totaldata.length;
  var yaxisData=[];

  //Use of React Hook

  React.useEffect(()=>{
    for(let num =0; num<totalTypesOfWines; num++){
      let sum=0;
      for(let y=0;y<totaldata[num].length;y++){
         sum=sum+totaldata[num][y]["Malic Acid"];
      }
      sum=sum/totaldata[num].length;
      var eachData=[];
      eachData.push(num);
      eachData.push(sum);
      yaxisData.push(eachData);
    }
  },[]);

  const eChartsOption = {
    title: {
      // title of our chart
      text: "Scatter Plot"
    },
    xAxis: {
       // name of X Axis
       name: "Alcohol",
       type: "category",
       // Contains the values for XAxis
       data: ["One", "Two", "Three"]
    },
  yAxis: {
    // name of Y Axis
    name: "Average of Malic Acid",
    type: "value"
  },
 
    series: {
      symbolSize: 20,
      
      data: yaxisData,
      type: "scatter",
      showBackground: true
      
      
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "200%"
      }}
    >
   
      <ReactEChart
        style={{
          width: "100%",
          height: "500%",
          color: ""
        }}
        option={eChartsOption}
      />
    </div>
  );
}