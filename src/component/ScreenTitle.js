import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ScreenTitle = ({children}) => {
  return <Text style={styles.titleStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    // fontFamily: 'Inter',
  },
});

export default ScreenTitle;
