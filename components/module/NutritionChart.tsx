import React from "react";
import { ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const data = {
  labels: ["Ph", "Mg", "C"], // optional
  data: [0.4, 0.6, 0.8],
};
const NutritionChart = () => {
  return (
    <ProgressChart
      data={data}
      width={Dimensions.get("window").width * 0.8}
      height={220}
      strokeWidth={16}
      radius={32}
      chartConfig={{
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726",
        },
      }}
      hideLegend={false}
    />
  );
};

export default NutritionChart;
