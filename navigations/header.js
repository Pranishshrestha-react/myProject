import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {primary, textcolor, textLight} from '../constants';
import { NavigationContainer } from '@react-navigation/native';

const AllHeader = (props) =>{
    return(
        
        <Container>
            <Header style={{backgroundColor:primary}}>
            <Left>
                <Button transparent>
                <Icon name='arrow-back' style={{color:textcolor}} onPress={()=>null}/>
                </Button>
            </Left>
            <Body>
                <Title style={{color:textcolor}}>{props.headtitle}</Title>
            </Body>
            <Right>
                <Button transparent>
                <Icon name='search' style={{color:textcolor}} />
                </Button>
                <Button transparent>
                <Icon name='md-man' style={{color:textcolor}} />
                </Button>
            </Right>
            </Header>
        </Container>

        );
  }

  export default AllHeader;