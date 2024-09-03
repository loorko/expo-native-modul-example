const getEntitlement = () => { 
  return { "com.apple.developer.storekit.external-purchase": true
};

export default {
  "name": "expo-native-modul-example",
  "slug": "expo-native-modul-example",
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./assets/icon.png",
  "userInterfaceStyle": "light",
  "splash": {
    "image": "./assets/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  "ios": {
    "supportsTablet": true,
    "bundleIdentifier": "com.instacarapp.exponativemodulexample",
    "entitlements": {
      ...getEntitlement(),
      "aps-environment": true 
    },
    "infoPlist": {
      "SKExternalPurchase": ["hu"]
    }
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    }
  },
  "web": {
    "favicon": "./assets/favicon.png"
  },
  "extra": {
    "eas": {
      "projectId": "9b7edee8-d172-493f-86ea-7d7fef844b51"
    }
  }
}