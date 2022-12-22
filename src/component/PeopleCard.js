import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const PeopleCard = ({onPress, item}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      activeOpacity={0.3}
      style={styles.container}>
      <Text style={styles.title}>{item?.name ?? ''}</Text>
      <Text style={styles.emailText}>{item?.email ?? ''}</Text>
      <Text style={styles.emailText}>{item?.phone ?? ''}</Text>
      <View style={styles.compCont}>
        <Text style={styles.emailText}>{item?.company?.name ?? ''}</Text>
        <Text style={styles.emailText}>{item.totalAlbums}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 6,
    marginBottom: 16,
  },
  title: {
    color: '#44444F',
    fontWeight: '700',
    fontSize: 18,
  },
  emailText: {
    color: '#696974',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
    marginBottom: 1,
  },
  compCont: {
    // flex: 1,
    justifyContent: 'space-between',
    paddingTop: 8,
    marginTop: 8,
    flexDirection: 'row',
    // border: 1.15854px solid #DEDEDE;
    borderTopWidth: 1.5,
    borderColor: '#dedede',
  },
});

export default PeopleCard;
