import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { DATA_FLATLIST_HOME } from "../../config/Constants";
import { DATA_FLATlIST_ARABIC } from "../../config/Constants";
import Card from "../../components/HomeCard";
import Metrics from "../../theme/Metrics";
import { Colors } from "../../theme/Colors";
import { getImagesPath } from "../../utils/Util";
const Home = ({navigation}) => {
    return(
        <SafeAreaView>
            <View style = {styles.container}>
                {/* <Text style = {styles.descriptionText}>
                    CHOOSE WHAT YOU LIKE THE MOST
                </Text> */}
                <View style = {styles.listContainer}>
                    <FlatList
                        data={DATA_FLATLIST_HOME}
                        renderItem = {({item}) => <Card item={item} navigation = {navigation}/>}
                        showsHorizontalScrollIndicator = {false}
                        showsVerticalScrollIndicator = {false}
                        style = {styles.flatlist}
                    />
                </View>
            </View>
        </SafeAreaView>
       
    )
}

export default Home;

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#FFFBE9',
        //paddingTop : 20,
        width : '100%',
        height : '100%',
        paddingHorizontal : Metrics.ratio(20)
    },
    listContainer : {
        //height : '100%',
        paddingBottom : 70,
    },
    descriptionText : {
        color : Colors.TEXT_COLOR,
        fontSize : 20,
    },
    flatlist : {
     //   height : '100%'
    }


})