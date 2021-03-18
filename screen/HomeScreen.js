import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const HomeScreen= props =>{
    return <View style ={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text style ={{color:'red', fontSize: 30}}>This is my home page</Text>
    </View>

}
 
const styles = StyleSheet.create({

});

export default HomeScreen;