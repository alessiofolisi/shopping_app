/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./application/screens/HomeScreen"
import DetailsStoreScreen from "./application/screens/DetailsStoreScreen"
import ProductsDetailsScreen from './application/screens/ProductsDetailsScreen';
import SearchScreen from './application/screens/SearchScreen';
import AccountScreen from './application/screens/AccountScreen';
import CartScreen from './application/screens/CartScreen';



const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dettagli Shop" component={DetailsStoreScreen} />
      <Stack.Screen name="Dettagli Prodotto" component={ProductsDetailsScreen} />
      <Stack.Screen name="Search" component={SearchScreen}/>
      <Stack.Screen name="Account" component={AccountScreen}/>
      <Stack.Screen name="Cart" component={CartScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default App
