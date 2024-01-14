// React Peer Dependencies
import React, { Suspense, useEffect } from "react";
import { useColorScheme, View } from "react-native";
// Expo Peer Dependencies
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
// Tamagui Peer Dependencies
import { Button, H2, H3, TamaguiProvider, Text, Theme, XStack } from "tamagui";
import { ToastProvider, ToastViewport } from "@tamagui/toast";
import tamaguiConfig from "../tamagui.config";
// Custom Components
import { Toast, LayoutStack } from "@consts/components";
import { AlignJustify } from "@tamagui/lucide-icons";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const colorScheme = useColorScheme();

  const [areAssetsLoaded] = useFonts({
    "Geist-Regular": require("@assets/fonts/Geist/Geist-Regular.otf"),
    "Geist-Medium": require("@assets/fonts/Geist/Geist-Medium.otf"),
    "Geist-SemiBold": require("@assets/fonts/Geist/Geist-SemiBold.otf"),
    "Geist-Bold": require("@assets/fonts/Geist/Geist-Bold.otf"),
    "Geist-Black": require("@assets/fonts/Geist/Geist-Black.otf"),
  });

  useEffect(() => {
    if (areAssetsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [areAssetsLoaded]);

  if (!areAssetsLoaded) return null;

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={colorScheme}>
          <ThemeProvider
            value={colorScheme === "light" ? DefaultTheme : DarkTheme}
          >
            <ToastProvider burntOptions={{ from: "bottom" }}>
              <LayoutStack>
                <Stack
                  screenOptions={{
                    headerShown: true,
                    headerTitle: () => (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          marginLeft: -10,
                        }}
                      >
                        <H3>Home</H3>
                        <Button
                          w={"$3"}
                          h={"$3"}
                        >
                          <AlignJustify />
                        </Button>
                      </View>
                    ),
                  }}
                />
              </LayoutStack>
              <Toast />
              <ToastViewport />
            </ToastProvider>
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
};
export default Layout;
