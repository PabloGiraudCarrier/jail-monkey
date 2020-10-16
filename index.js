const react = require('react')
const rn = require('react-native')
let JailMonkey = null

// Detect location of native modules to support RN < 0.28
if (react.NativeModules && react.NativeModules.JailMonkey) {
  JailMonkey = react.NativeModules.JailMonkey
} else {
  JailMonkey = rn.NativeModules.JailMonkey
}

export default {
  isSmellingShit: () => JailMonkey.isSmellingShit,
  hookDetected: () => JailMonkey.hookDetected,
  canMockLocation: () => JailMonkey.canMockLocation,
  trustFall: () => JailMonkey.isJailBroken || JailMonkey.canMockLocation,
  isOnExternalStorage: () => JailMonkey.isOnExternalStorage,
  isDebugged: () => JailMonkey.isDebugged
}
