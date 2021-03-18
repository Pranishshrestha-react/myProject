import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import MyJobScreen from '../screen/MyJobScreen';
import ProfileScreen from '../screen/ProfileScreen';
import {Ionicons} from '@expo/vector-icons'; 

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component = {HomeScreen} options={{
                tabBarIcon:(props) => <Ionicons name="home" color={props.focused ? props.color : "gray"} size={props.focused ? props.size*1.3 : props.size}/>
            }} />
            <Tab.Screen name="MyJob" component = {MyJobScreen} options={{
                tabBarIcon:(props) => <Ionicons name="home" color={props.focused ? props.color : "gray"} size={props.focused ? props.size*1.3 : props.size}/>
            }}/>
            <Tab.Screen name="Profile" component = {ProfileScreen} options={{
                tabBarIcon:(props) => <Ionicons name="home" color={props.focused ? props.color : "gray"} size={props.focused ? props.size*1.3 : props.size}/>
            }}/>
        </Tab.Navigator>
    )
}

export default AppNavigator;