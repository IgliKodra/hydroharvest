import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const WaterChart = ({ data = [26, 26, 26, 25, 25] }: { data?: number[] }) => {
  return (
    <LineChart
      data={{
        labels: ["12:28:40", "12:29:03", "12:29:25", "12:29:48", "12:30:11"],
        datasets: [
          {
            data,
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
