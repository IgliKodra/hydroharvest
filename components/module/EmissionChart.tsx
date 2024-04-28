import React from "react";
import { Dimensions } from "react-native";
import { ContributionGraph } from "react-native-chart-kit";

const commitsData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 },
];
const EmissionChart = () => {
  return (
    <ContributionGraph
      tooltipDataAttrs={(() => {}) as any}
      values={commitsData}
      endDate={new Date("2017-04-01")}
      numDays={105}
      width={Dimensions.get("window").width * 0.8}
      height={220}
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
    />
  );
};

export default EmissionChart;
