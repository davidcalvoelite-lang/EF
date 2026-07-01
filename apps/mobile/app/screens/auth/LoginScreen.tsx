import { FC, useState } from "react"
import { KeyboardAvoidingView, Platform, StatusBar } from "react-native"
import { ScrollView, Text, XStack, YStack } from "tamagui"

import {
  AuthFormCard,
  Button,
  Divider,
  EliteForgeLogo,
  Input,
  LinkText,
  SocialButton,
} from "@/components/ui"
import { useResponsiveLayout } from "@/hooks/useResponsiveLayout"
import { eliteForgeColors } from "@/theme/eliteForgeColors"
import { translate } from "@/i18n/translate"
import type { AppStackScreenProps } from "@/navigators/navigationTypes"

type LoginScreenProps = AppStackScreenProps<"Login">

export const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {
    insets,
    horizontalPadding,
    contentMaxWidth,
    sectionGap,
    isSmallScreen,
    keyboardVerticalOffset,
  } = useResponsiveLayout()

  return (
    <YStack flex={1} backgroundColor={eliteForgeColors.carbon}>
      <StatusBar barStyle="light-content" backgroundColor={eliteForgeColors.carbon} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <ScrollView
          flex={1}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            paddingTop: insets.top + (isSmallScreen ? 12 : 20),
            paddingBottom: insets.bottom + 24,
            paddingHorizontal: horizontalPadding,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <YStack
            width="100%"
            maxWidth={contentMaxWidth}
            gap={sectionGap}
            alignItems="center"
            flex={1}
            justifyContent={isSmallScreen ? "flex-start" : "center"}
          >
            <EliteForgeLogo />

            <Text
              color="#FFFFFF"
              opacity={0.65}
              fontSize={isSmallScreen ? 13 : 14}
              textAlign="center"
            >
              {translate("loginScreen:subtitle")}
            </Text>

            <AuthFormCard>
              <YStack gap={isSmallScreen ? 14 : 16} padding={isSmallScreen ? 14 : 16}>
                <Input
                  label={translate("loginScreen:usernameFieldLabel")}
                  placeholder={translate("loginScreen:usernameFieldPlaceholder")}
                  value={username}
                  onChangeText={setUsername}
                  autoComplete="username"
                />

                <Input
                  label={translate("loginScreen:passwordFieldLabel")}
                  placeholder={translate("loginScreen:passwordFieldPlaceholder")}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  autoComplete="password"
                />

                <Button width="100%" onPress={() => undefined}>
                  {translate("loginScreen:signInButton")}
                </Button>

                <LinkText
                  prompt={translate("loginScreen:createAccountPrompt")}
                  linkLabel={translate("loginScreen:createAccountLink")}
                  onPress={() => navigation.navigate("Register")}
                />
              </YStack>
            </AuthFormCard>

            <YStack width="100%" gap={isSmallScreen ? 10 : 12}>
              <Divider label={translate("loginScreen:continueWith")} />

              <XStack width="100%" gap={isSmallScreen ? 8 : 10}>
                <SocialButton
                  compact
                  provider="google"
                  label={translate("loginScreen:googleButton")}
                  compactLabel={translate("loginScreen:googleButtonShort")}
                  onPress={() => undefined}
                />

                <SocialButton
                  compact
                  provider="facebook"
                  label={translate("loginScreen:facebookButton")}
                  compactLabel={translate("loginScreen:facebookButtonShort")}
                  onPress={() => undefined}
                />
              </XStack>
            </YStack>
          </YStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </YStack>
  )
}
