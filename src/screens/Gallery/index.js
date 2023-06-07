import React, {useState, useEffect} from "react";
import {View, Text, SafeAreaView, Modal, TouchableOpacity, StyleSheet, FlatList, Image} from 'react-native';
import GalleryCard from "../../components/GalleryCard";
import { DATA_FLATlIST_ARABIC } from "../../config/Constants";
import { getCurrentIndex, getFlatListDataGallery, getZoomViewrImages } from "../../utils/Util";
import { Colors } from "../../theme/Colors";
import { StatusBarStyle } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { INTERSTITIAL_AD_UNIT_ID } from "../../config/Constants";
import Images from "../../config/Images";

import { useContext } from "react";
import AppContext from "../../provider/Context";
import ScrolledAdViewExample from "../../ads/ScrolledAdView";
import InterExp from "../../ads/Interstitial";



const Gallery = ({navigation,route}) => {
    const {isInitialized} = useContext(AppContext)
    const {setStatusText} = useContext(AppContext)
    const {isNativeAdShowing} = useContext(AppContext)
    const [imageurl, setImageurl] = useState('');
    const [index, setIndex] = useState(null);
    const [modalVisibleStatus, setModalVisibleStatus] = useState(false);
    const [dataSource, setDataSource] = useState(getFlatListDataGallery(route.params.image));
    const [zoomViewerImages, setZoomViewerImages] = useState(getZoomViewrImages(route.params.image));

    useEffect(()=> {
      const i = getCurrentIndex(imageurl, zoomViewerImages);
      setIndex(i);
    }, [imageurl]);
    return(
        <SafeAreaView style={styles.container}>
          {modalVisibleStatus ? 
            <Modal transparent = {false}
              visible = {modalVisibleStatus}
              animationType = {'fade'}
              onRequestClose = {() => {
               setModalVisibleStatus(!modalVisibleStatus);
               setImageurl('');
              }}>
              <ImageViewer 
                imageUrls={zoomViewerImages} 
                index = {index}
                backgroundColor = {Colors.COLOR_4}
              />
            </Modal>
          : 
          <View style = {{paddingBottom : 50}}>
            <FlatList
              key = {'#'}
              data = {dataSource}
              renderItem = {({item}) => <GalleryCard item={item} passImageUrl = {setImageurl} passmodalVisibleStatus = {setModalVisibleStatus}/>}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
            />    
          </View>
          } 
          
        </SafeAreaView>
    )
}

export default Gallery;

const styles = StyleSheet.create({
  container: {
    width : '100%',
    backgroundColor : Colors.COLOR_4,
    height : '100%',
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  imageStyle: {
    height: 120,
    width: '100%',
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.COLOR_4,
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 50,
    right: 20,
    position: 'absolute',
    backgroundColor : 'red'
  },
});