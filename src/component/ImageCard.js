import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

const ImageCard = ({onPress, sm = false, photos}) => {
  return (
    <View style={{...styles.cardCont, marginBottom: sm ? 16 : 0}}>
      <TouchableOpacity
        onPress={() => onPress(photos.item.url)}
        activeOpacity={0.7}
        style={{
          ...styles.imgCont,
          height: sm ? 80 : 180,
        }}>
        <FastImage
          style={styles.img}
          source={{
            uri: photos.item.url,
            priority: FastImage.priority.normal,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardCont: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    borderRadius: 6,
    backgroundColor: '',
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  imgCont: {
    flex: 1,

    width: '100%',
    padding: 2,
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 2,
    marginBottom: 1,
  },
  value: {
    color: '#00000080',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 2,
    marginBottom: 1,
  },
});

export default ImageCard;
