import React from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Text } from 'native-base';
import {primary, textcolor, textLight} from '../constants';
import {Ionicons} from '@expo/vector-icons';

const AllJobScreen= props =>{


    return <View style ={{flex:1}}>
        <Header style={{backgroundColor:primary}}>
          <Body>
            <Title style={{color:textcolor}}>All Jobs</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' style={{color:textcolor}}/>
            </Button>            
            <Button transparent>
              <Icon name='md-man' style={{color:textcolor}} />
            </Button>
          </Right>
        </Header>

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

}
 
const styles = StyleSheet.create({

});

export default AllJobScreen;