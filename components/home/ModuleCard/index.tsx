// Expo Peer Dependencies
import { useRouter } from "expo-router";
// Tamagui Components
import { XStack, Image, YStack, Separator } from "tamagui";
// Types And Interfaces
type ModuleCardProps = {
  image: any;
  title: string;
  description: string;
  color: string;
  ID: number;
};
// Styles
import {
  ModuleCardContentDescription,
  ModuleCardContentTitle,
  ModuleCardButton,
  ModuleCardRoot,
  ModuleCardContent,
} from "./index.styles";
// Icons
import { ChevronRight } from "@tamagui/lucide-icons";

function ModuleCard({ image, title, description, ID }: ModuleCardProps) {
  const router = useRouter();
  const handleModuleRouting = () => {
    router.push(`/module/${ID}`);
  };
  return (
    <ModuleCardRoot>
      <Image
        source={image}
        height={100}
        resizeMode={"contain"}
        width={100}
      />
      <Separator
        alignSelf="stretch"
        backgroundColor={"$gray11"}
        vertical
      />
      <ModuleCardContent>
        <ModuleCardContentTitle>{title}</ModuleCardContentTitle>
        <ModuleCardContentDescription numberOfLines={4}>
          {description}
        </ModuleCardContentDescription>
      </ModuleCardContent>
      <ModuleCardButton onPress={handleModuleRouting}>
        <ChevronRight />
      </ModuleCardButton>
    </ModuleCardRoot>
  );
}

export default ModuleCard;
export type { ModuleCardProps };
