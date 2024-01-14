// React Peer Dependencies
import React, {
  ReactNode,
  useState,
  forwardRef,
  useImperativeHandle,
  ForwardedRef,
} from "react";
// Tamagui Components
import { Sheet, SheetProps } from "tamagui";

// Types And Interfaces
type DrawerProps = {
  children: ReactNode;
  showOverlay?: boolean;
  snapPoints?: number[];
  dismissOnSnapToBottom?: boolean;
  isOpenByDefault?: boolean;
  defaultPosition?: number;
} & SheetProps;

type DrawerMethods = {
  openDrawer: () => void;
  closeDrawer: () => void;
};

const Drawer = forwardRef(
  (
    {
      children,
      showOverlay = true,
      snapPoints = [85, 50],
      dismissOnSnapToBottom = true,
      modal = true,
      isOpenByDefault = false,
      defaultPosition = 0,
      ...rest
    }: DrawerProps,
    forwarderRef: ForwardedRef<DrawerMethods>
  ) => {
    const [position, setPosition] = useState(defaultPosition);
    const [open, setOpen] = useState(isOpenByDefault);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    useImperativeHandle(forwarderRef, () => ({
      openDrawer,
      closeDrawer,
    }));

    return (
      <Sheet
        forceRemoveScrollEnabled={open}
        position={position}
        modal={modal}
        open={open}
        onOpenChange={setOpen}
        snapPoints={snapPoints}
        snapPointsMode={"percent"}
        dismissOnSnapToBottom={dismissOnSnapToBottom}
        onPositionChange={setPosition}
        {...rest}
      >
        {showOverlay && (
          <Sheet.Overlay
            animation={"lazy"}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        )}
        <Sheet.Handle />
        <Sheet.Frame
          padding="$4"
          justifyContent="center"
          alignItems="center"
          space="$5"
        >
          {children}
        </Sheet.Frame>
      </Sheet>
    );
  }
);

export default Drawer;
export type { DrawerProps, DrawerMethods };
