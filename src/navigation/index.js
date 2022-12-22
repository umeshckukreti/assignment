import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Gallery from '../screens/gallery';
import {routeConstant} from '../constant/routeContant';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeConstant.HOME}>
        <Stack.Screen
          name={routeConstant.HOME}
          component={Home}
          options={{
            title: '',
            // headerShown: false,
            headerLeft: () => <Text style={styles.headerTitle}>Photos</Text>,
          }}
        />
        <Stack.Screen
          name={routeConstant.GALLERY}
          options={({route}) => ({title: route.params.item.name})}
          component={Gallery}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    color: '#000',
    fontSize: '700',
    fontSize: 30,
  },
});

export default Navigation;
