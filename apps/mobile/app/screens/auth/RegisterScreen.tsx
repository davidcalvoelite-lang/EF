import { Pressable, StatusBar } from "react-native"
import { Text, YStack } from "tamagui"

import { EliteForgeLogo } from "@/components/ui"
import { useResponsiveLayout } from "@/hooks/useResponsiveLayout"
import { eliteForgeColors } from "@/theme/eliteForgeColors"
import { translate } from "@/i18n/translate"
import type { AppStackScreenProps } from "@/navigators/navigationTypes"

type RegisterScreenProps = AppStackScreenProps<"Register">

export function RegisterScreen({ navigation }: RegisterScreenProps) {
  const { insets, horizontalPadding, contentMaxWidth, titleSize, isSmallScreen } =
    useResponsiveLayout()

  return (
    <YStack
      flex={1}
      backgroundColor={eliteForgeColors.carbon}
      paddingTop={insets.top + 16}
      paddingBottom={insets.bottom + 16}
      paddingHorizontal={horizontalPadding}
      alignItems="center"
    >
      <StatusBar barStyle="light-content" backgroundColor={eliteForgeColors.carbon} />

      <YStack width="100%" maxWidth={contentMaxWidth}>
        <Pressable onPress={() => navigation.goBack()} hitSlop={12}>
          <Text color="#00CEC8" fontSize={16} fontWeight="600">
            {translate("common:back")}
          </Text>
        </Pressable>

        <YStack flex={1} alignItems="center" justifyContent="center" gap={isSmallScreen ? 16 : 20}>
          <EliteForgeLogo />

          <Text
            color="#FFFFFF"
            fontSize={titleSize}
            fontWeight="800"
            textTransform="uppercase"
            textAlign="center"
          >
            {translate("registerScreen:title")}
          </Text>

          <Text
            color="#FFFFFF"
            opacity={0.65}
            fontSize={isSmallScreen ? 14 : 16}
            textAlign="center"
            maxWidth={320}
          >
            {translate("registerScreen:subtitle")}
          </Text>
        </YStack>
      </YStack>
    </YStack>
  )
}
