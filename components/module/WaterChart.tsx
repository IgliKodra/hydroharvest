import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const WaterChart = () => {
  return (
    <LineChart
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      }}
      width={Dimensions.get("window").width * 0.8} // from react-native
      height={220}
      yAxisSuffix="cm³"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "transparent",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        propsForDots: {
          r: "6",
          strokeWidth: "1",
          stroke: "#00edff",
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 4,
      }}
    />
  );
};

export default WaterChart;
