import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';

const Loader = props => {
  const {loading,...attributes} = props;
  return (
    <Modal
      visible={loading}
      transparent={true}
      animationType={'none'}
    >
      <View style={{  flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'}}>
      
        <ActivityIndicator
          animating={loading}
          size="large" color="#718772"  />
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  
});
export default Loader;