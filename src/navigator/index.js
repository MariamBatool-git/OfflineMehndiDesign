import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import StackScreens from "./Stack";
import { BANNER_AD_UNIT_ID } from "../config/Constants";
import NativeBannerExample from "../ads/NativeBanner";

const AppContainer = (props) => {
    const {setStatusText} = props;
    const {isInitialized} = props;
    const {isNativeUIBannerShowing} = props;
    const {isProgrammaticBannerShowing} = props;
    const {setIsNativeUIBannerShowing} = props;
    return(
        <NavigationContainer>
            <StackScreens/>
            <NativeBannerExample
                adUnitId={BANNER_AD_UNIT_ID}
                log={setStatusText}
                isInitialized={isInitialized}
                isNativeUIBannerShowing={isNativeUIBannerShowing}
                isProgrammaticBannerShowing={isProgrammaticBannerShowing}
                setIsNativeUIBannerShowing={setIsNativeUIBannerShowing}
            />
        </NavigationContainer>
    )
}

export default AppContainer;