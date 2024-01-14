// React Peer Dependencies
import React, { useState, Fragment } from "react";
import { ScrollView } from "react-native";
import { ImagePickerResult } from "expo-image-picker";
// Tamagui Components
import {
  Form,
  Button,
  YStack,
  Input,
  Label,
  TextArea,
  Text,
  styled,
  Image,
} from "tamagui";
// Custom Components
import { ImagePicker } from "@consts/components";
// Custom Hooks
import { useFetch } from "@consts/hooks";
// Zod And Utils
import z, { ZodError } from "zod";
import { v4 as uuID } from "uuid";
import { userSchema } from "@consts/utils";
import endpoints, { headers } from "@consts/endpoints";
// Consts
const FORM_FIELDS: {
  label: string;
  name: keyof typeof userSchema._type;
  type?: "input" | "text-area" | "image-picker";
}[] = [
  {
    label: "Your Email",
    name: "email",
  },
  {
    label: "Your Password",
    name: "password",
  },
] as const;
// Styles
import { AccountLayoutFormSubmit } from "./index.styles";
// Types And Interfaces
type Form = z.infer<typeof userSchema>;
type FormFields = (typeof FORM_FIELDS)[number]["name"];

type InputAndTextBoxProps = {
  value: string;
  onChangeText: (value: string) => void;
  id: string;
  size: string;
  width: string;
};

const SignUpScreenContent = styled(ScrollView, {
  name: "SignUpScreenContent",
  width: "100%",
});

const SignUpScreen = () => {
  const [formData, setFormData] = useState<Form>({
    email: "",
    password: "",
  });

  const [requestBody, setRequestBody] = useState<FormData | null>(null);
  const [errors, setErrors] = useState<{
    [key in FormFields]?: string[];
  }>({});

  useFetch({
    url: endpoints["sign-up"],
    type: "POST",
    body: requestBody,
    preventFetch: requestBody === null,
    headers: headers["sign-up"],
    onSuccess: (response) => {
      console.log(response);
    },
  });

  const handleFormSubmit = () => {
    try {
      userSchema.parse(formData);
      const { password, email } = formData;
      console.log(formData);

      const requestBody = new FormData();
      requestBody.append(
        "user",
        JSON.stringify({
          password,
          email,
        })
      );
    } catch (error) {
      console.error("Sign-Up Form error: ", error);
      setErrors((error as ZodError<Form>).flatten().fieldErrors);
    }
  };
  const handleImagePick = async (image: ImagePickerResult) => {
    const profilePictureResponse = await fetch(image.assets[0].uri);
    const profilePictureBlob = await profilePictureResponse.blob();
    const profilePicture = new File(
      [profilePictureBlob],
      `profile-picture-${uuID()}`,
      {
        type: profilePictureBlob.type,
      }
    );
    setFormData((currentFormData) => ({
      ...currentFormData,
      profilePicture,
    }));
  };
  return (
    <SignUpScreenContent>
      <Image
        source={require("../../../assets/images/logo.png")}
        width={200}
        height={200}
        resizeMode={"cover"}
      />
      <Form onSubmit={handleFormSubmit}>
        <YStack
          width={"100%"}
          space={"$2"}
        >
          {FORM_FIELDS.map(({ name, label, ...rest }) => {
            const props = {
              id: `${name}-field`,
              value: formData[name],
              size: "$4",
              width: "100%",
              onChangeText: (value: string) =>
                setFormData((currentFormData) => ({
                  ...currentFormData,
                  [name]: value,
                })),
            };

            return (
              <Fragment key={name}>
                <Label htmlFor={`${name}-field`}>{label}</Label>
                {
                  {
                    "image-picker": (
                      <ImagePicker
                        onImagePicked={(pickedImage) =>
                          handleImagePick(pickedImage)
                        }
                        showPickedImage
                      />
                    ),
                    "text-area": (
                      <TextArea {...(props as InputAndTextBoxProps)} />
                    ),
                    input: <Input {...(props as InputAndTextBoxProps)} />,
                  }[rest?.type ?? "input"]
                }
                {errors[name] && (
                  <Text color={"$red8"}>{errors[name]?.[0]}</Text>
                )}
              </Fragment>
            );
          })}
          <Form.Trigger asChild>
            <AccountLayoutFormSubmit>Submit</AccountLayoutFormSubmit>
          </Form.Trigger>
        </YStack>
      </Form>
    </SignUpScreenContent>
  );
};

export default SignUpScreen;
