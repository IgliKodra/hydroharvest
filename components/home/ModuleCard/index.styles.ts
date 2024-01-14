// Tamagui Components
import { Text, H4, styled, Button, XStack, YStack } from "tamagui";

export const ModuleCardRoot = styled(XStack, {
  name: "ModuleCardRoot",
  backgroundColor: "$green3",
  borderRadius: "$5",
  borderColor: "$green6",
  borderWidth: "$1",
  width: "100%",
  padding: "$4",
  gap: "$4",
});

export const ModuleCardContent = styled(YStack, {
  name: "ModuleCardContent",
  justifyContent: "center",
  height: "$8",
});

export const ModuleCardContentTitle = styled(H4, {
  name: "ModuleCardContentDescription",
});

export const ModuleCardContentDescription = styled(Text, {
  name: "ModuleCardContentDescription",
  color: "$gray11",
});

export const ModuleCardButton = styled(Button, {
  name: "ModuleCardButton",
  borderRadius: 1000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$white",
  height: "$5",
  width: "$5",
  marginVertical: "auto",
  backgroundColor: "$green6",
  pressStyle: {
    backgroundColor: "$green8",
  },
});
