import { XStack, type XStackProps } from "tamagui"

import { Logo } from "./Logo"

export interface NavbarProps extends XStackProps {
  rightContent?: React.ReactNode
  showLogo?: boolean
}

export function Navbar({ rightContent, showLogo = true, children, ...props }: NavbarProps) {
  return (
    <XStack
      ai="center"
      jc="space-between"
      px="$4"
      py="$3"
      bg="$background"
      borderBottomWidth={1}
      borderBottomColor="$borderColor"
      {...props}
    >
      <XStack ai="center" gap="$3" flex={1}>
        {showLogo ? <Logo showText={false} size={32} /> : null}
        {children}
      </XStack>
      {rightContent}
    </XStack>
  )
}
