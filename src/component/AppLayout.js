import {View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';

const AppLayout = ({ps, children}) => {
  return (
    <View style={{...styles.appContainer, paddingHorizontal: ps ? 8 : 16}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },
});

export default AppLayout;
