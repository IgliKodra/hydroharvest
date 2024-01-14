import { Circle, styled, Text, XStack, YStack } from "tamagui";

export const Navbar = styled(XStack, {
  name: "Navbar",
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  padding: "$1",
  shadowOffset: { width: 0, height: 22 },
  shadowOpacity: 1,
  shadowRadius: 5,
  shadowColor: "white",

  "$theme-light": {
    backgroundColor: "white",
  },
  "$theme-dark": { backgroundColor: "black", shadowColor: "black" },
});

export const NavTab = styled(YStack, {
  position: "relative",
  flex: 1,
  alignItems: "center",
  paddingHorizontal: "$4",
  paddingVertical: "$2",
});

export const NavTabIcon = styled(Circle, {
  width: "80%",
  height: "80%",
  "$group-active": { backgroundColor: "$orange7" },
});

export const NavTabTitle = styled(Text, {
  name: "NavTabTitle",
  fontSize: "$1",
  "$group-active": { color: "$orange11" },
});
