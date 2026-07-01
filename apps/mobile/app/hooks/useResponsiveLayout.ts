import { Platform, useWindowDimensions } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const TABLET_MIN_WIDTH = 768
const SMALL_HEIGHT = 700
const SMALL_WIDTH = 360

export function useResponsiveLayout() {
  const { width, height } = useWindowDimensions()
  const insets = useSafeAreaInsets()

  const isSmallScreen = height < SMALL_HEIGHT || width < SMALL_WIDTH
  const isTablet = width >= TABLET_MIN_WIDTH

  const horizontalPadding = Math.max(16, Math.round(width * 0.06))
  const contentMaxWidth = Math.min(width - horizontalPadding * 2, isTablet ? 480 : 440)
  const logoWidth = Math.min(width * (isSmallScreen ? 0.62 : 0.68), isTablet ? 320 : 280)
  const sectionGap = isSmallScreen ? 14 : isTablet ? 28 : 22
  const titleSize = isSmallScreen ? 28 : isTablet ? 36 : 32

  return {
    screenWidth: width,
    screenHeight: height,
    insets,
    horizontalPadding,
    contentMaxWidth,
    logoWidth,
    sectionGap,
    titleSize,
    isSmallScreen,
    isTablet,
    keyboardVerticalOffset: Platform.OS === "ios" ? insets.top : 0,
  }
}
