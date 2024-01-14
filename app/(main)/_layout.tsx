// React Peer Dependencies
import React, { useEffect } from "react";
import {
  Keyboard,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
// Expo Peer Dependencies
import { Link, Stack, usePathname } from "expo-router";
// Custom Components
import { LayoutStack } from "@consts/components";
// Utils
import { ROUTER } from "@consts/defaults";
import { Navbar, NavTab, NavTabIcon, NavTabTitle } from "./index.styles";

const MainLayout = () => {
  const currentRoute = usePathname();

  const positionY = new Animated.Value(0);

  const handleKeyboardShow = () =>
    Animated.timing(positionY, {
      toValue: 100,
      duration: 250,
      useNativeDriver: true,
    }).start();

  const handleKeyboardHide = () =>
    Animated.timing(positionY, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", handleKeyboardShow);
    Keyboard.addListener("keyboardDidHide", handleKeyboardHide);

    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);

  return (
    <LayoutStack>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ marginBottom: Platform.OS === "ios" ? 20 : 0 }}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateY: positionY,
              },
            ],
          }}
        >
          <Navbar>
            {ROUTER.main.map(({ title, path, Icon }, i) => (
              <Link
                key={i}
                href={path}
                asChild
              >
                <NavTab
                  // @ts-ignore
                  group={currentRoute === path ? "active" : "inactive"}
                >
                  <NavTabIcon>
                    <Icon
                      color={currentRoute === path ? "$orange11" : "$gray11"}
                    />
                  </NavTabIcon>
                  <NavTabTitle>{title}</NavTabTitle>
                </NavTab>
              </Link>
            ))}
          </Navbar>
        </Animated.View>
      </KeyboardAvoidingView>
    </LayoutStack>
  );
};

export default MainLayout;
