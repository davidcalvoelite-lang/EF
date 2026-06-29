/* eslint-env node */
const { getDefaultConfig } = require("expo/metro-config")
const { withTamagui } = require("@tamagui/metro-plugin")

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname)

config.transformer.getTransformOptions = async () => ({
  transform: {
    inlineRequires: true,
  },
})

config.resolver.unstable_conditionNames = ["require", "default", "browser"]
config.resolver.sourceExts.push("cjs")

module.exports = withTamagui(config, {
  components: ["tamagui"],
  config: "./tamagui.config.ts",
})
