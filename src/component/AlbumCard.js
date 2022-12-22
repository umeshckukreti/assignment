import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

const AlbumCard = ({onPress, sm = false, imgOnly = false, album}) => {
  // console.log(album);
  return (
    <View style={{...styles.cardCont, marginBottom: sm ? 16 : 0}}>
      <TouchableOpacity
        onPress={() => onPress(album.item)}
        activeOpacity={0.7}
        style={{
          ...styles.imgCont,
          height: sm ? 80 : 180,
        }}>
        <FastImage
          style={styles.img}
          source={require('../assets/album2.png')}
        />
      </TouchableOpacity>
      {!imgOnly && (
        <View>
          <Text numberOfLines={1} style={styles.title}>
            {album.item?.title}
          </Text>
          <Text style={styles.value}>25</Text>
        </View>
      )}
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

export default AlbumCard;
