// React Peer Dependencies
import React from "react";
// Tamagui Peer Dependencies
import { YStack } from "tamagui";
import {
  Toast as TamaguiToast,
  useToastController,
  useToastState,
} from "@tamagui/toast";

const Toast = () => {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) return null;

  return (
    <TamaguiToast
      key={currentToast.id}
      duration={100}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      animation={"unset"}
      viewportName={currentToast.viewportName}
    >
      <YStack>
        <TamaguiToast.Title>{currentToast.title}</TamaguiToast.Title>
        {!!currentToast.message && (
          <TamaguiToast.Description>
            {currentToast.message}
          </TamaguiToast.Description>
        )}
      </YStack>
    </TamaguiToast>
  );
};
export default Toast;

// const ToastControl = ({ native }: { native: boolean }) => {
//   const toast = useToastController();
//
//   return (
//     <XStack
//       space="$2"
//       justifyContent="center"
//     >
//       <Button
//         onPress={() => {
//           toast.show("Successfully saved!", {
//             message: "Don't worry, we've got your data.",
//             native,
//           });
//         }}
//       >
//         Show
//       </Button>
//
//       <Button
//         onPress={() => {
//           toast.hide();
//         }}
//       >
//         Hide
//       </Button>
//     </XStack>
//   );
// };
