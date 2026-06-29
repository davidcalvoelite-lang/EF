import { Button as TamaguiButton, type ButtonProps as TamaguiButtonProps } from "tamagui"

export type AppButtonVariant = "primary" | "secondary" | "outline" | "ghost"

export interface AppButtonProps extends Omit<TamaguiButtonProps, "variant"> {
  variant?: AppButtonVariant
}

const variantStyles: Record<AppButtonVariant, Partial<TamaguiButtonProps>> = {
  primary: {
    bg: "$blue10",
    color: "white",
    pressStyle: { bg: "$blue11" },
  },
  secondary: {
    bg: "$gray5",
    color: "$gray12",
    pressStyle: { bg: "$gray6" },
  },
  outline: {
    bg: "transparent",
    borderWidth: 1,
    borderColor: "$blue10",
    color: "$blue10",
    pressStyle: { bg: "$blue2" },
  },
  ghost: {
    bg: "transparent",
    color: "$blue10",
    pressStyle: { bg: "$blue2" },
  },
}

export function Button({ variant = "primary", children, ...props }: AppButtonProps) {
  return (
    <TamaguiButton
      rounded="$4"
      fontWeight="600"
      px="$4"
      py="$2"
      {...variantStyles[variant]}
      {...props}
    >
      {children}
    </TamaguiButton>
  )
}
