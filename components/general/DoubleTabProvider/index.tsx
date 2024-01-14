import { PropsWithChildren } from "react";
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from "react-native-gesture-handler";

type DoubleTabProviderProps = {
  onDoubleTap: () => void;
};
const DoubleTabProvider = ({
  children,
  onDoubleTap,
}: PropsWithChildren<DoubleTabProviderProps>) => {
  return (
    <GestureHandlerRootView>
      <TapGestureHandler
        onActivated={onDoubleTap}
        numberOfTaps={2}
      >
        {children}
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
};

export default DoubleTabProvider;
