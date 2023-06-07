import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native';
import AppLovinMAX from 'react-native-applovin-max';
import AppButton from '../components/AppButton';

const ScrolledAdViewExample = (props) => {
  const { bannerAdUnitId } = props;
  const { mrecAdUnitId } = props;
  const { isInitialized } = props;
  const { isNativeAdShowing } = props;

  const [isAdEnabled, setIsAdEnabled] = useState(true);
  const [isScrollViewShowing, setIsScrollViewShowing] = useState(false);

  useEffect(()=> {setIsScrollViewShowing(!isScrollViewShowing);}, [])

  return (
    <>
      {
        isScrollViewShowing &&
          <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <AppButton
                title={'CLOSE'}
                enabled={true}
                onPress={() => {
                  setIsScrollViewShowing(false);
                }}
              />
              {[...Array(2)].map((_, i)=> 
                (<View key={i}>
                   {
                     isAdEnabled ?
                       (i % 2 == 0) ? <AppLovinMAX.AdView
                                        adUnitId={bannerAdUnitId}
                                        adFormat={AppLovinMAX.AdFormat.BANNER}
                                        style={styles.adview}
                                        key={i+'-2'}
                                        onAdLoaded={(adInfo) => {
                                          console.log('scrolled Banner ad loaded from ' + adInfo.networkName);
                                        }}
                                        onAdLoadFailed={(errorInfo) => {
                                          console.log('scrolled Banner ad failed to load with error code ' + errorInfo.code + ' and message: ' + errorInfo.message);
                                        }}
                                        onAdClicked={(_adInfo) => {
                                          console.log('scrolled Banner ad clicked');
                                        }}
                                        onAdExpanded={(_adInfo) => {
                                          console.log('scrolled Banner ad expanded')
                                        }}
                                        onAdCollapsed={(_adInfo) => {
                                          console.log('scrolled Banner ad collapsed')
                                        }}
                                        onAdRevenuePaid={(adInfo) => {
                                          console.log('scrolled Banner ad revenue paid: ' + adInfo.revenue);
                                        }}
                                      />
                       :
                                      <AppLovinMAX.AdView
                                        adUnitId={mrecAdUnitId}
                                        adFormat={AppLovinMAX.AdFormat.MREC}
                                        style={styles.adview}
                                        key={i+'-2'}
                                      />
                     :
                       <Text style={styles.placeholder} key={i+'-2'}>AD PLACEHOLDER</Text>
                   }
                 </View>)
              )}
            </ScrollView>
            {
              isAdEnabled ?
                <AppLovinMAX.AdView
                  adUnitId={bannerAdUnitId}
                  adFormat={AppLovinMAX.AdFormat.BANNER}
                  style={styles.adview}
                />
              :
                <Text style={styles.placeholder}>AD PLACEHOLDER</Text>
            }
          </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: Platform.select({
      ios: Dimensions.get('window').height - 36 - 50,
      android: Dimensions.get('window').height,
    }),
    zIndex: 1,
    elevation: Platform.OS === 'android' ? 1 : 0,
  },
  scrollView: {
    backgroundColor: '#FFFBE9',
    flex : 1,
  },
  text: {
    margin: 10,
    fontSize: 20,
  },
  adview: {
    width: '100%',
    height: 'auto',
  },
  placeholder: {
    marginTop: 10,
    backgroundColor: 'lightblue',
    fontSize: 40,
    textAlign: 'center',
    height: 50,
  },
});

export default ScrolledAdViewExample;
