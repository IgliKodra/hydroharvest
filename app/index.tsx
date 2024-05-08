// React Native Peer Dependencies
import { SafeAreaView } from "react-native-safe-area-context";
// Expo Peer Dependencies
import React from "react";
import { Link } from "expo-router";
// Tamagui Peer Dependencies
import { Button, H3, Paragraph, YStack } from "tamagui";
import { useToastController, useToastState } from "@tamagui/toast";
// Custom Components
import { ModuleCard } from "@consts/components";

const Home = () => {
  const toast = useToastController();
  return (
    <SafeAreaView>
      <YStack
        space="$4"
        maxWidth={600}
        alignSelf="center"
        padding="$4"
      >
        <H3 alignSelf={"center"}>Welcome to HydroHarvest!</H3>
        <Link
          href={"/sign-up"}
          asChild
        >
          <Button
            textAlign="center"
            backgroundColor={"$green6"}
            borderColor={"$green11"}
            borderWidth={"$1"}
            pressStyle={{
              backgroundColor: "$green8",
            }}
          >
            Try out Sign Up Screen
          </Button>
        </Link>
        <Link
          href={"/sign-out"}
          asChild
        >
          <Button
            textAlign="center"
            backgroundColor={"$green6"}
            borderColor={"$green11"}
            borderWidth={"$1"}
            pressStyle={{
              backgroundColor: "$green8",
            }}
          >
            Try out Sign Out Screen
          </Button>
        </Link>
        {/*<Button*/}
        {/*  onPress={() => {*/}
        {/*    toast.show("Successfully saved!", {*/}
        {/*      message: "Don't worry, we've got your data.",*/}
        {/*      native: false,*/}
        {/*    });*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Show*/}
        {/*</Button>*/}
        {modules.map((moduleData, i) => (
          <ModuleCard
            {...moduleData}
            key={i}
          />
        ))}
      </YStack>
    </SafeAreaView>
  );
};

export default Home;

// Constants
const modules = [
  {
    image: require("@assets/images/logo.png"),
    title: "Module 1",
    description: "Module 1 Description",
    color: "#FF0000",
    ID: 1,
  },
  {
    image: require("@assets/images/logo.png"),
    title: "Module 2",
    description: "Module 2 Description",
    color: "#FF0000",
    ID: 1,
  },
  {
    image: require("@assets/images/logo.png"),
    title: "Module 3",
    description: "Module 3 Description",
    color: "#FF0000",
    ID: 1,
  },
];
