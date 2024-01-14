import { ComponentType } from "react";
// Icons
import {
  Bike,
  Heart,
  Inbox,
  User,
  Search,
  KeyRound,
  Plus,
} from "@tamagui/lucide-icons";
import { Dimensions } from "react-native";

const CARD_WIDTH = Dimensions.get("window").width * 0.72;

const MAP_STYLE_DARK = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#263c3f",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6b9a76",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#38414e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212a37",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9ca5b3",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#1f2835",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f3d19c",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#2f3948",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#515c6d",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
];
const MAP_STYLE_LIGHT = [];

type Route = {
  title: string;
  path: string;
  message?: string;
  Icon: ComponentType<{ size?: number; color?: string }>;
};

type RouteCategory = "account" | "main"; //more to be added

type Router = {
  [key in RouteCategory]: Route[];
};
const ROUTER: Router = {
  account: [
    {
      title: "Sign In",
      path: "/sign-in",
      message: "Welcome back home!",
      Icon: KeyRound,
    },
    {
      title: "Sign Up",
      path: "/sign-up",
      message: "Welcome to our community!",
      Icon: Plus,
    },
  ],
  main: [
    {
      title: "Search",
      path: "/map",
      Icon: Search,
    },
    {
      title: "Favorites",
      path: "/favorites",
      Icon: Heart,
    },
    { title: "Trips", path: "/trips", Icon: Bike },
    { title: "Inbox", path: "/inbox", Icon: Inbox },
    { title: "Account", path: "/account", Icon: User },
  ],
} as const;

export { CARD_WIDTH, MAP_STYLE_DARK, MAP_STYLE_LIGHT, ROUTER };
