import React from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import { Appbar } from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {primary, textcolor, textLight} from '../constants';
import {Ionicons} from '@expo/vector-icons';

const HomeScreen= props =>{


    return (
    <View style ={{flex:1}}>

      <Appbar.Header style={{backgroundColor:primary}}>                  
        <Appbar.Content title="Today's Jobs" style={{color:textcolor}} />
        <Appbar.Action icon="magnify" onPress={() => {null}} style={{color:textcolor}} />
        <Appbar.Action icon="md-man" onPress={() => {null}} style={{color:textcolor}} />
      </Appbar.Header>

      <ScrollView>
        <Card>
            <CardItem header>
              <Text style={{color:textLight, fontSize:20}}>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{color:textLight}}>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
            <View style={{width: '100%', flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:textLight, fontSize:11}}>Published by: GeekyAnts</Text>
                    <Ionicons name='heart-outline' size={20} color={textLight}/>
              </View>
            </CardItem>
         </Card>
      </ScrollView>

    </View>
    )

}
 
const styles = StyleSheet.create({

});

export default HomeScreen;