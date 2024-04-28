import { useState } from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import {
  AnimatePresence,
  H5,
  H6,
  TabLayout,
  Tabs,
  TabsTabProps,
  YStack,
  styled,
  StackProps,
} from "tamagui";
import { LayoutSafeAreaView } from "@consts/components";
import { Dimensions } from "react-native";
import WaterChart from "@components/module/WaterChart";
import NutritionChart from "@components/module/NutritionChart";
import EmissionChart from "@components/module/EmissionChart";

export default function TabsAdvancedDemo() {
  const [demoIndex, setDemoIndex] = useState(0);
  return (
    <LayoutSafeAreaView px={"$4"}>
      <TabsAdvancedBackground />
    </LayoutSafeAreaView>
  );
}
const TabsAdvancedBackground = () => {
  const [tabState, setTabState] = useState<{
    currentTab: string;
    /**
     * Layout of the Tab user might intend to select (hovering / focusing)
     */
    intentAt: TabLayout | null;
    /**
     * Layout of the Tab user selected
     */
    activeAt: TabLayout | null;
    /**
     * Used to get the direction of activation for animating the active indicator
     */
    prevActiveAt: TabLayout | null;
  }>({
    activeAt: null,
    currentTab: "water",
    intentAt: null,
    prevActiveAt: null,
  });

  const setCurrentTab = (currentTab: string) =>
    setTabState({ ...tabState, currentTab });
  const setIntentIndicator = (intentAt) =>
    setTabState({ ...tabState, intentAt });
  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt });
  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState;

  /**
   * -1: from left
   *  0: n/a
   *  1: from right
   */
  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0;
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1;
  })();

  const enterVariant =
    direction === 1 ? "isLeft" : direction === -1 ? "isRight" : "defaultFade";
  const exitVariant =
    direction === 1 ? "isRight" : direction === -1 ? "isLeft" : "defaultFade";

  const handleOnInteraction: TabsTabProps["onInteraction"] = (type, layout) => {
    if (type === "select") {
      setActiveIndicator(layout);
    } else {
      setIntentIndicator(layout);
    }
  };

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      size="$4"
      padding="$2"
      height={Dimensions.get("window").height * 0.8}
      flexDirection="column"
      activationMode="manual"
      backgroundColor="$background"
      borderRadius="$4"
      position="relative"
    >
      <YStack>
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicator
              borderRadius="$4"
              width={intentAt.width}
              height={intentAt.height}
              x={intentAt.x}
              y={intentAt.y}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeAt && (
            <TabsRovingIndicator
              borderRadius="$4"
              theme="active"
              width={activeAt.width}
              height={activeAt.height}
              x={activeAt.x}
              y={activeAt.y}
            />
          )}
        </AnimatePresence>

        <Tabs.List
          disablePassBorderRadius
          loop={false}
          aria-label="Manage your account"
          space="$2"
          backgroundColor="transparent"
        >
          <Tabs.Tab
            unstyled
            value="water"
            onInteraction={handleOnInteraction}
          >
            <H6>Water</H6>
          </Tabs.Tab>
          <Tabs.Tab
            unstyled
            value="nutrition"
            onInteraction={handleOnInteraction}
          >
            <H6>Nutrition</H6>
          </Tabs.Tab>
          <Tabs.Tab
            unstyled
            value="emissions"
            onInteraction={handleOnInteraction}
          >
            <H6>CO2 Emissions</H6>
          </Tabs.Tab>
        </Tabs.List>
      </YStack>

      <AnimatePresence
        exitBeforeEnter
        enterVariant={enterVariant}
        exitVariant={exitVariant}
      >
        <AnimatedYStack
          key={currentTab}
          animation="100ms"
          x={0}
          opacity={1}
          flex={1}
        >
          <Tabs.Content
            value={currentTab}
            forceMount
            flex={1}
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            bg={"black"}
            p={"$4"}
            borderRadius={"$4"}
            gap={"$4"}
            mt={"$4"}
          >
            <H5
              textTransform={"capitalize"}
              size={"$6"}
            >
              {currentTab}
            </H5>
            {TAB_MAP[currentTab]}
          </Tabs.Content>
        </AnimatedYStack>
      </AnimatePresence>
    </Tabs>
  );
};
const TAB_MAP = {
  water: <WaterChart />,
  nutrition: <NutritionChart />,
  emissions: <EmissionChart />,
};
const TabsRovingIndicator = ({
  active,
  ...props
}: { active?: boolean } & StackProps) => {
  return (
    <YStack
      position="absolute"
      backgroundColor="$color5"
      opacity={0.7}
      animation="100ms"
      enterStyle={{
        opacity: 0,
      }}
      exitStyle={{
        opacity: 0,
      }}
      {...(active && {
        backgroundColor: "$color8",
        opacity: 0.6,
      })}
      {...props}
    />
  );
};

const AnimatedYStack = styled(YStack, {
  variants: {
    isLeft: { true: { x: -25, opacity: 0 } },
    isRight: { true: { x: 25, opacity: 0 } },
    defaultFade: { true: { opacity: 0 } },
  } as const,
});
