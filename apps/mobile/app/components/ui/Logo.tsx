import { Image, View, type ImageStyle, type StyleProp } from "react-native"

import { useResponsiveLayout } from "@/hooks/useResponsiveLayout"

const eliteForgeLogo = require("@assets/images/elite-forge-logo.png")

export interface EliteForgeLogoProps {
  width?: number
}

export function EliteForgeLogo({ width }: EliteForgeLogoProps) {
  const { logoWidth } = useResponsiveLayout()
  const resolvedWidth = width ?? logoWidth
  const resolvedHeight = resolvedWidth * 1.05

  const imageStyle: StyleProp<ImageStyle> = {
    width: resolvedWidth,
    height: resolvedHeight,
    backgroundColor: "transparent",
  }

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
      }}
    >
      <Image
        source={eliteForgeLogo}
        style={imageStyle}
        resizeMode="contain"
        accessibilityLabel="Elite Forge"
      />
    </View>
  )
}
