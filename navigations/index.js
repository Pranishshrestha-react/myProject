import React from 'react';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import MyJobScreen from '../screen/MyJobScreen';
import ProfileScreen from '../screen/ProfileScreen';
import AllJobScreen from '../screen/AllJobScreen';
import AppliedJobScreen from '../screen/AppliedJobScreen';
import {Ionicons} from '@expo/vector-icons'; 





const AppNavigator = () => {
    return(
        <NavigationContainer>
            <DrawNavigator/>
        </NavigationContainer>
    )
}
const Drawer = createDrawerNavigator();

const DrawNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Offer Job" component = {OfferTabNavigator}/>
            <Drawer.Screen name="Required Job" component = {RequiredTabNavigator} />
        </Drawer.Navigator>
    )
}

const reqTab = createBottomTabNavigator();

const RequiredTabNavigator = () => {
    return(
        <reqTab.Navigator tabBarOptions={{
            showLabel: false
        }}>
            <reqTab.Screen name="Home" component = {HomeScreen} options={{
                tabBarIcon:(props) => <Ionicons name="home" color={props.focused ?'#1e2226' : '#99adc1'} size={props.focused ? props.size*1.3 : props.size}/>
            }} />
            <reqTab.Screen name="MyJob" component = {MyJobScreen} options={{
                tabBarIcon:(props) => <Ionicons name="briefcase" color={props.focused ?'#1e2226' : '#99adc1'} size={props.focused ? props.size*1.3 : props.size}/>
            }}/>
            <reqTab.Screen name="Profile" component = {ProfileScreen} options={{
                tabBarIcon:(props) => <Ionicons name="md-man" color={props.focused ? '#1e2226' : '#99adc1'} size={props.focused ? props.size*1.3 : props.size}/>
            }}/>

        
        </reqTab.Navigator>
  
     
    )
}
const offTab = createBottomTabNavigator();
const OfferTabNavigator = () => {
    return(
        <offTab.Navigator tabBarOptions={{
            showLabel: false
        }}>
            <offTab.Screen name="AllJobs" component = {AllJobScreen} options={{
                tabBarIcon:(props) => <Ionicons name="home" color={props.focused ?'#1e2226' : '#99adc1'} size={props.focused ? props.size*1.3 : props.size}/>
            }} />
            <offTab.Screen name="Applied" component = {AppliedJobScreen} options={{
                tabBarIcon:(props) => <Ionicons name="briefcase" color={props.focused ?'#1e2226' : '#99adc1'} size={props.focused ? props.size*1.3 : props.size}/>
            }} />
            <offTab.Screen name="Profile" component = {ProfileScreen} options={{
                tabBarIcon:(props) => <Ionicons name="md-man" color={props.focused ?'#1e2226' : '#99adc1'} size={props.focused ? props.size*1.3 : props.size}/>
            }} />

        </offTab.Navigator>
    )
}

export default AppNavigator;
    