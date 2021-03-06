// should be imported this way:
// import JailMonkey from 'jail-monkey';

declare const _default: {
  isSmellingShit: () => object;
  isDebuggedMode: () => Promise<boolean>;
  canMockLocation: () => boolean;
  trustFall: () => boolean;
  isOnExternalStorage: () => boolean;
  AdbEnabled: () => boolean;
  isDevelopmentSettingsMode: () => Promise<boolean>;
};

export default _default;
