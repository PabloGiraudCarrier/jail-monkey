import { NativeModules } from "react-native";

const { JailMonkey } = NativeModules;

export default {
  isSmellingShit: () => JailMonkey.isSmellingShit,
  hookDetected: () => JailMonkey.hookDetected,
  canMockLocation: () => JailMonkey.canMockLocation,
  trustFall: () => JailMonkey.isSmellingShit || JailMonkey.canMockLocation,
  isOnExternalStorage: () => JailMonkey.isOnExternalStorage,
  isDebuggedMode: function() {
    return JailMonkey.isDebuggedMode();
  },
  isDevelopmentSettingsMode: function() {
    return JailMonkey.isDevelopmentSettingsMode();
  },
  AdbEnabled: () => JailMonkey.AdbEnabled
};
