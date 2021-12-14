import React from 'react';
import { StyleSheet } from 'react-native';
import News from './components/News';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Everything from './components/Everything';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="News" component={News} options={{ headerShown: false }} /> 
        <Stack.Screen name="Everything" component={Everything} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

