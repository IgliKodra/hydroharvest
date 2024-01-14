import { Button, H1, H4, styled, YStack } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";

export const AccountLayoutContainer = styled(SafeAreaView, {
  name: "AccountLayoutContainer",
  width: "100%",
  height: "100%",
  flex: 1,
  paddingLeft: "$3",
  paddingRight: "$3",
});
export const AccountLayoutHeader = styled(YStack, {
  name: "AccountLayoutHeader",
  width: "100%",
  height: "20%",
  paddingHorizontal: "$4",
  paddingVertical: "$2",
});
export const AccountLayoutHeaderTitle = styled(H1, {
  name: "AccountLayoutHeaderTitle",
  fontWeight: "700",
});
export const AccountLayoutHeaderSubtitle = styled(H4, {
  name: "AccountLayoutHeaderSubtitle",
  fontWeight: "600",
  textDecorationLine: "underline",
  color: "$green11",
});

export const AccountLayoutFormSubmit = styled(Button, {
  name: "AccountLayoutFormSubmit",
  width: "100%",
  backgroundColor: "$green8",
  borderRadius: "$1",
  marginTop: "$4",
  marginBottom: "$2",
});
