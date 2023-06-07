import React, { useEffect, useState } from "react"
import {TouchableOpacity} from "react-native";
import {View, Image, Text, StyleSheet} from 'react-native';
import AppLovinMAX from "react-native-applovin-max";
import Images from "../../config/Images";
import Metrics from "../../theme/Metrics";
import { Colors } from "../../theme/Colors";
import { useContext } from "react";
import AppContext from "../../provider/Context";
import { INTERSTITIAL_AD_UNIT_ID } from "../../config/Constants";
import Loader from "../LoadingSpinner";


const Card = ({item, navigation}) => {
    const {isInitialized} = useContext(AppContext)
    const {setStatusText} = useContext(AppContext)
    const [loading, setLoading] = useState(false);
    
    let headerTitle = item.title.split(' MEHNDI')[0];
    let image = headerTitle.replace(' ', '');


    useEffect(()=> {
      
    }, [])


    return(
        <TouchableOpacity onPress={async () => {
            try {
                await AppLovinMAX.loadInterstitial(INTERSTITIAL_AD_UNIT_ID);
                const isInterstitialReady = await AppLovinMAX.isInterstitialReady(INTERSTITIAL_AD_UNIT_ID);
                if (isInterstitialReady) {
                  AppLovinMAX.showInterstitial(INTERSTITIAL_AD_UNIT_ID);
                  navigation.navigate('Gallery', {headerTitle : headerTitle, image : image})
                } 
              } catch (error) {
                console.log(error.toString());
              }
        }}>
             <View style = {styles.cardContainer}>
                <Loader loading = {loading}/>
                <Image source={Images.titleImages[image]} style = {styles.cardImage} resizeMode="cover"/>
                <Text style = {styles.cardText}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
       
    )
}

export default Card;

const styles = StyleSheet.create({
       
    cardContainer : {
        height : 140,
        flexDirection : 'row',
        marginTop : 20,
        borderColor : Colors.COLOR_2,
        borderWidth : 1,
        borderRadius : 15,
        paddingTop : 20,
        backgroundColor : Colors.COLOR_3
    },
    cardImage : {
        height : 100,
        width : 100,
        marginLeft : Metrics.ratio(12),
        borderRadius : 15
    },
    cardText : {
        textAlign : 'center',
        textAlignVertical : 'center',
        height : 100,
        color : Colors.TEXT_COLOR,
        marginLeft : Metrics.ratio(12),
        fontWeight : "500",
    },
})