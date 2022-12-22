import {View, Text, Modal, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

const ViewImageModal = ({modalVisible, closeModal, openImage}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalCont}>
        <View style={styles.subCont}>
          <FastImage
            source={{uri: openImage, priority: FastImage.priority.normal}}
            style={styles.img}
          />
          <Pressable style={styles.closeCont} onPress={() => closeModal()}>
            <FastImage
              source={require('../assets/x.png')}
              style={styles.imgCross}
            />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 16,
  },
  subCont: {
    height: '60%',
    width: '90%',
    backgroundColor: 'red',
    borderRadius: 16,
  },
  closeCont: {
    position: 'absolute',
    right: -15,
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    top: -25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#d2d2d2',
  },
  imgCross: {
    height: 25,
    width: 25,
  },
});

export default ViewImageModal;
