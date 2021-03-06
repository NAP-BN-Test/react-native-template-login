import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Error404 from '../../screens/Error404/Error404';

const HomeStack = createStackNavigator();

const FamilyStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="family" component={Error404} />
    </HomeStack.Navigator>
  );
};

export default FamilyStackScreen;
