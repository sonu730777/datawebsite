import ReactEChart from "echarts-for-react";
import React from "react";
import { WineData } from "./data";

export default function BarChart() {

  //upper for scatter bar

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
      yaxisData.push(sum);
      
    }
  },[]);
  

  const eChartsOption = {
    title: {
      // title of our chart
      text: "Bar Chart"
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
    //To enable tooltips
    tooltip: {},
    // To enable toolbox
    toolbox: {
      feature: {
        // displays a options to direct save chart as a image
        saveAsImage: {}
      }
    },

    series: {
      data:yaxisData,
      type: "bar"
      
      
      
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "500%",
        color: "red"
      }}
    >
      <ReactEChart
        style={{
          width: "100%",
          height: "500%"
        }}
        option={eChartsOption}
      />
   
  
    </div>
  );
}