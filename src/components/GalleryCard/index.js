import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from "react-native-fast-image";
import { getCurrentIndex } from "../../utils/Util";

const GalleryCard = ({item, passImageUrl = () => {}, passmodalVisibleStatus = () => {}}) => {
    return(
        <View style={styles.imageContainerStyle}>
            <TouchableOpacity
            key={item.id}
            style={{flex: 1}}
            onPress={() => {
                const url = item.src;
                passmodalVisibleStatus(true);
                passImageUrl(url);
            }}>
                <Image source={item.src} style = {styles.imageStyle}/>
            </TouchableOpacity>
        </View>
    )
}

export default GalleryCard;

const styles = StyleSheet.create({
    imageContainerStyle: {
      flex: 1,
      flexDirection: 'column',
      margin: 1,
    },
    imageStyle: {
      height: 120,
      width: '100%',

    },
})