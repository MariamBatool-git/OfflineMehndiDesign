import Images from '../config/Images'


export const DATA_FLATLIST_HOME = [
    {
        "image" : '',
        "title" : "BRIDAL MEHNDI DESIGNS"
    },
    {
        "image" : '',
        "title" : "HANDS MEHNDI DESIGNS"
    },
    {
        "image" : '',
        "title" : "GOL TIKKI MEHNDI DESIGNS"
    },
    {
        "image" : '',
        "title" : "SIMPLE MEHNDI DESIGNS"
    },
    {
        "image" : '',
        "title" : "ARM MEHNDI DESIGNS"
    },
    {
        "image" : '',
        "title" : "FOOT MEHNDI DESIGNS"
    }, 
    {
        "image" : '',
        "title" : "JEWELLERY MEHNDI DESIGNS"
    }
]

// Create constants
export const SDK_KEY = 'MwC6TPAXga6d3FW9-TwP-wDh-3y8BWyXQ9evTpQEOXtRnNamrUAqONVNQSVczS9OboH9aiNzFEP0c-nSTxGtJn';

export const INTERSTITIAL_AD_UNIT_ID = Platform.select({
  ios: '7d78299c79536d2c',
  android: '7d78299c79536d2c',
});

export const REWARDED_AD_UNIT_ID = Platform.select({
  ios: '3dd1dcd2e846f066',
  android: '3dd1dcd2e846f066',
});

export const BANNER_AD_UNIT_ID = Platform.select({
  ios: '3b14f02f73ecde85',
  android: '3b14f02f73ecde85',
});

export const MREC_AD_UNIT_ID = Platform.select({
  ios: '8d628f758ee071be',
  android: '8d628f758ee071be',
});
// APPOPEN
export const NATIVE_AD_UNIT_ID = Platform.select({
  ios: '677f3dce2534ea30',
  android: '677f3dce2534ea30',
});

export const AdLoadState = {
  notLoaded: 'NOT_LOADED',
  loading: 'LOADING',
  loaded: 'LOADED'
};

export const DEFAULT_ASPECT_RATIO = (16/9);