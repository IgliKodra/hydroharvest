// Expo Peer Dependencies
import React from "react";
import { Link } from "expo-router";
// Tamagui Peer Dependencies
import { Button, H1, Paragraph, YStack } from "tamagui";
import { useToastController, useToastState } from "@tamagui/toast";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const toast = useToastController();

  return (
    <SafeAreaView>
      <YStack
        space="$4"
        maxWidth={600}
      >
        <H1 textAlign="center">Welcome to Tamagui.</H1>
        <Link
          href={"/sign-up"}
          asChild
        >
          <Paragraph textAlign="center">Go to Sign Up Screen</Paragraph>
        </Link>
        <Link
          href={"/map"}
          asChild
        >
          <Paragraph textAlign="center">Go to Map Screen</Paragraph>
        </Link>
        <Button
          onPress={() => {
            toast.show("Successfully saved!", {
              message: "Don't worry, we've got your data.",
              native: false,
            });
          }}
        >
          Show
        </Button>
      </YStack>
    </SafeAreaView>
  );
};

export default Home;
