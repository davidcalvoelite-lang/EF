import { Image, type ImageProps, Text, XStack } from "tamagui"

export interface LogoProps {
  size?: number
  showText?: boolean
  imageSource?: ImageProps["source"]
}

export function Logo({ size = 40, showText = true, imageSource }: LogoProps) {
  return (
    <XStack ai="center" gap="$2">
      {imageSource ? (
        <Image source={imageSource} width={size} height={size} rounded={8} />
      ) : (
        <XStack
          width={size}
          height={size}
          rounded="$3"
          bg="$blue10"
          ai="center"
          jc="center"
        >
          <Text color="white" fontWeight="800" fontSize={size * 0.4}>
            EF
          </Text>
        </XStack>
      )}
      {showText ? (
        <Text fontSize="$6" fontWeight="700" color="$color">
          EF App
        </Text>
      ) : null}
    </XStack>
  )
}
