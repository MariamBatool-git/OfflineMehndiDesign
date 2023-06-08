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
  ios: '6b6c97a8e6d2084f',
  android: '6b6c97a8e6d2084f',
});

export const REWARDED_AD_UNIT_ID = Platform.select({
  ios: 'b1fc45a3d75b10af',
  android: 'b1fc45a3d75b10af',
});

export const BANNER_AD_UNIT_ID = Platform.select({
  ios: 'fe66788409aec00d',
  android: 'fe66788409aec00d',
});

export const MREC_AD_UNIT_ID = Platform.select({
  ios: '11934af3b21ec459',
  android: '11934af3b21ec459',
});
// APPOPEN
export const NATIVE_AD_UNIT_ID = Platform.select({
  ios: 'd46bb4e06f6fcdbe',
  android: 'd46bb4e06f6fcdbe',
});

export const AdLoadState = {
  notLoaded: 'NOT_LOADED',
  loading: 'LOADING',
  loaded: 'LOADED'
};

export const DEFAULT_ASPECT_RATIO = (16/9);