import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "tamagui";

export const LayoutSafeAreaView = styled(SafeAreaView, {
  name: "LayoutSafeAreaView",
  width: "100%",
  height: "100%",
  position: "relative",
  flex: 1,
  backgroundColor: "$backgroundStrong",
});
