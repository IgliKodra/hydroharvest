import React from "react";
import { View } from "react-native";
import { Button, H5, Image, Input, YStack } from "tamagui";
import { Link } from "expo-router";

const Index = () => {
  return (
    <YStack
      h={"100%"}
      w={"100%"}
      p={"$4"}
      gap={"$8"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image
        source={require("@assets/images/user.png")}
        width={200}
        height={200}
        resizeMode={"cover"}
        bg={"white"}
        p={"$2"}
        borderRadius={3000}
      />
      <Input
        {...{
          value: "esterpellumbi@gmail.com",
          size: "$4",
          width: "100%",
        }}
      />

      <Button
        w={"100%"}
        textAlign="center"
        backgroundColor={"$green6"}
        borderColor={"$green11"}
        borderWidth={"$1"}
        pressStyle={{
          backgroundColor: "$green8",
        }}
      >
        LOG OUT
      </Button>
      <Link href="/">
        <H5>No, Return to Homepage</H5>
      </Link>
    </YStack>
  );
};

export default Index;
