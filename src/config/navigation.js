import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login/Index';
import Dashboard  from '../screens/Dashboard/index';


const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen options={{headerShown: false}}
          
          name="login"
          component={Login}
        /> */}
        <Stack.Screen options={{headerShown: false}}
          
          name="DashBoard"
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="VerifyNews"
//       screenOptions={{
//         drawerStyle: {
//           backgroundColor: '#fcf5ff',
//           width: 250,
//         },
//         drawerActiveTintColor: 'purple',
//       }}
//       drawerContent={props => <CustomDrawer {...props} />}>
//       <Drawer.Screen
//         options={{headerShown: false}}
//         name="Verify News"
//         component={VerifyNews}
//       />
//       <Drawer.Screen
//         options={{headerShown: false}}
//         name="Progress Result"
//         component={BarResult}
//       />
//       <Drawer.Screen
//         name="Settings"
//         options={{headerShown: false}}
//         component={Settings}
//       />
//     </Drawer.Navigator>
//   );
// };


// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }
export default Navigation;

