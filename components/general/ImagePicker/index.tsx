// React Peer Dependencies
import React, { useState } from "react";
import { Image } from "react-native";
// Expo Peer Dependencies
import * as ImagePickerProvider from "expo-image-picker";
import * as MediaLibraryProvider from "expo-media-library";
// Tamagui Components
import { Button } from "tamagui";
import { useToastController } from "@tamagui/toast";
// Types And Interfaces
type ImagePickerProps = {
  showPickedImage?: boolean;
  onImagePicked: (image: ImagePickerProvider.ImagePickerResult) => void;
};

const ImagePicker = ({ onImagePicked, showPickedImage }: ImagePickerProps) => {
  const [permissionResponse, requestPermission] =
    MediaLibraryProvider.usePermissions();

  const [pickedImage, setPickedImage] =
    useState<ImagePickerProvider.ImagePickerResult | null>(null);

  const toastController = useToastController();

  const getImageAsset = async () => {
    const result = await ImagePickerProvider.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.6,
    });

    if (result.canceled) {
      toastController.show("You did not select any image.", {
        native: true,
      });
      return;
    }
    setPickedImage(result);
    onImagePicked(result);
  };

  const handleImagePick = async () => {
    // Check if permissions are given and ask to access the user's media library if not
    let isGranted = permissionResponse?.granted ?? false;

    if (!isGranted) {
      const { status } = await requestPermission();
      isGranted = status === "granted";
    }

    if (isGranted) await getImageAsset();
  };

  return (
    <>
      <Button onPress={handleImagePick}>Pick an Image</Button>
      {showPickedImage && pickedImage && (
        <Image source={{ uri: pickedImage.assets[0].uri }} style={{width: 100, height: 100}}/>
      )}
    </>
  );
};

export default ImagePicker;
export type { ImagePickerProps };
