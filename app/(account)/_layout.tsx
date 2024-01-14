// React Peer Dependencies
import React from "react";
import { Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Expo Peer Dependencies
import { Slot, usePathname } from "expo-router";
// Tamagui Peer Dependencies
import { YStack, styled, XStack, H1, H4 } from "tamagui";
import { CornerDownRight } from "@tamagui/lucide-icons";
// Custom Components
import { Drawer, LayoutSafeAreaView } from "@consts/components";
// Utils
import { ROUTER } from "@consts/defaults";
// Styled Components
import {
  AccountLayoutContainer,
  AccountLayoutHeader,
  AccountLayoutHeaderSubtitle,
  AccountLayoutHeaderTitle,
} from "./sign-up/index.styles";

const AccountLayout = () => {
  const currentPath = usePathname();
  const currentRoute = ROUTER.account.find(
    (route) => route.path === currentPath
  );

  return (
    <>
      <AccountLayoutHeader>
        <AccountLayoutHeaderTitle>
          {currentRoute.title}
        </AccountLayoutHeaderTitle>
        <XStack gap={"$2"}>
          <AccountLayoutHeaderSubtitle>
            {currentRoute.message}
          </AccountLayoutHeaderSubtitle>
        </XStack>
      </AccountLayoutHeader>
      <AccountLayoutContainer>
        <Slot />
      </AccountLayoutContainer>
    </>
  );
};

export default AccountLayout;
