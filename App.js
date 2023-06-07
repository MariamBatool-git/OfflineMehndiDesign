import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import Gallery from './src/screens/Gallery';
import Metrics from './src/theme/Metrics';
import AppContainer from './src/navigator';

import AppLovinMAX from "react-native-applovin-max";
import { SDK_KEY } from './src/config/Constants';
import { BANNER_AD_UNIT_ID } from './src/config/Constants';
import { REWARDED_AD_UNIT_ID } from './src/config/Constants';
import { NATIVE_AD_UNIT_ID } from './src/config/Constants';
import { MREC_AD_UNIT_ID } from './src/config/Constants';
import { INTERSTITIAL_AD_UNIT_ID } from './src/config/Constants';
import InterExample from './src/ads/InterExample';
import NativeAdViewExample from './src/ads/NativeAdView';
import NativeBannerExample from './src/ads/NativeBanner';
import NativeMRecExample from './src/ads/NativeMRec';
import ProgrammaticBannerExample from './src/ads/ProgrammaticBanner';
import ProgrammaticMRecExample from './src/ads/ProgrammaticMRec';
import RewardedExample from './src/ads/Rewarded';
import ScrolledAdViewExample from './src/ads/ScrolledAdView';

import AppContext from './src/provider/Context';

import AppButton from './src/components/AppButton';

export default function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isProgrammaticBannerShowing, setIsProgrammaticBannerShowing] = useState(false);
  const [isNativeUIBannerShowing, setIsNativeUIBannerShowing] = useState(false);
  const [isProgrammaticMRecShowing, setIsProgrammaticMRecShowing] = useState(false);
  const [isNativeUIMRecShowing, setIsNativeUIMRecShowing] = useState(false);
  const [isNativeAdShowing, setIsNativeAdShowing] = useState(false);
  const [statusText, setStatusText] = useState('Initializing SDK...');

  const [retryAttempt,setRetryAttempt] = useState(0);

  useEffect(() => {
    initAppLovinMax();
    loadInterstitial();
  }, []);

  useEffect(() => {
    console.log(statusText);
  }, [statusText]);

  const loadInterstitial = () => {
    AppLovinMAX.addInterstitialLoadedEventListener(() => {
      // Interstitial ad is ready to show. AppLovinMAX.isInterstitialReady(INTERSTITIAL_AD_UNIT_ID) now returns 'true'
      // Reset retry attempt
      console.log('Inter loaded...ready to be shown...')
      setRetryAttempt(0)
    });
    AppLovinMAX.addInterstitialLoadFailedEventListener(() => {
      // Interstitial ad failed to load 
      // AppLovin recommends that you retry with exponentially higher delays up to a maximum delay (in this case 64 seconds)
      setRetryAttempt(retryAttempt + 1);
      const retryDelay = Math.pow(2, Math.min(6, retryAttempt));
      console.log('Interstitial ad failed to load - retrying in ' + retryDelay + 's');
      setTimeout(function() {
        AppLovinMAX.loadInterstitial(INTERSTITIAL_AD_UNIT_ID);
      }, retryDelay * 1000);
    });
    AppLovinMAX.addInterstitialClickedEventListener(() => {});
    AppLovinMAX.addInterstitialDisplayedEventListener(() => {});
    AppLovinMAX.addInterstitialAdFailedToDisplayEventListener(() => {
        // Interstitial ad failed to display. AppLovin recommends that you load the next ad
        AppLovinMAX.loadInterstitial(INTERSTITIAL_AD_UNIT_ID);
    });
    AppLovinMAX.addInterstitialHiddenEventListener(() => {
      AppLovinMAX.loadInterstitial(INTERSTITIAL_AD_UNIT_ID);
    });
    AppLovinMAX.loadInterstitial(INTERSTITIAL_AD_UNIT_ID);
  }
  const initAppLovinMax = () => {
    if (isInitialized) return;
  
    // // MAX Consent Flow for iOS 14.5+
    // if (Platform.OS === 'ios' && parseFloat(Platform.Version) >= 14.5) {
    //   // Enable the iOS consent flow programmatically - NSUserTrackingUsageDescription must be added to the Info.plist
    //   AppLovinMAX.setConsentFlowEnabled(true);
    //   AppLovinMAX.setPrivacyPolicyUrl('https://your_company_name.com/privacy/'); // mandatory
    //   AppLovinMAX.setTermsOfServiceUrl('https://your_company_name.com/terms/'); // optional
    // }
  
    AppLovinMAX.setTestDeviceAdvertisingIds([]);
    AppLovinMAX.initialize(SDK_KEY).then(configuration => {
      setIsInitialized(true);
      setStatusText('SDK Initialized in ' + configuration?.countryCode);
    }).catch(error => {
      setStatusText(error.toString());
    });
  }
  return (
    <AppContext.Provider value={{isInitialized, setStatusText, isNativeAdShowing}}>
      <AppContainer
        adUnitId={BANNER_AD_UNIT_ID}
        log={setStatusText}
        isInitialized={isInitialized}
        isNativeUIBannerShowing={isNativeUIBannerShowing}
        isProgrammaticBannerShowing={isProgrammaticBannerShowing}
        setIsNativeUIBannerShowing={setIsNativeUIBannerShowing}
      />
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Platform.select({
      ios: Dimensions.get('window').height - 44, // For top safe area
      android: Dimensions.get('window').height,
    }),
    backgroundColor : 'red'
  },
  statusText: {
    marginBottom: 10,
    backgroundColor: 'green',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});
