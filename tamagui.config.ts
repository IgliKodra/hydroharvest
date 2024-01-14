// Tamagui Peer Dependencies
import { createFont, createTamagui, createTokens } from "tamagui";
import { createMedia } from "@tamagui/react-native-media-driver";
// => Tamagui Addons
import { createAnimations } from "@tamagui/animations-react-native";
import { createInterFont } from "@tamagui/font-inter";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  none: {
    type: "timing",
    duration: 0,
  },
  fast: {
    type: "spring",
    damping: 10,
    mass: 0.4,
    stiffness: 80,
    delay: 0,
    duration: 300,
  },
});
const baseFontConfig = createInterFont();
const headingFont = createFont({
  ...baseFontConfig,
  family: "Geist-Regular",
  face: {
    300: { normal: "Geist-Medium" },
    400: { normal: "Geist-Regular" },
    500: { normal: "Geist-SemiBold" },
    700: { normal: "Geist-Bold" },
    900: { normal: "Geist-Black" },
  },
});
const bodyFont = createFont({
  ...baseFontConfig,
  family: "Geist-Regular",
  face: {
    300: { normal: "Geist-Medium" },
    400: { normal: "Geist-Regular" },
    500: { normal: "Geist-SemiBold" },
    700: { normal: "Geist-Bold" },
    900: { normal: "Geist-Black" },
  },
});
const customTokens = createTokens({
  ...tokens,
  color: {
    ...tokens.color,
    primary: "#274029",
  },
});

const tamaguiConfig = createTamagui({
  animations,
  defaultTheme: "light",
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  media: createMedia({
    xs: { maxWidth: 660 },
    gtXs: { minWidth: 660 + 1 },
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    md: { maxWidth: 980 },
    gtMd: { minWidth: 980 + 1 },
    lg: { maxWidth: 1120 },
    gtLg: { minWidth: 1120 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),
  shorthands,
  themes,
  tokens,
});

export type AppConfig = typeof tamaguiConfig;

declare module "tamagui" {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default tamaguiConfig;
