import React from 'react';
import { Appbar } from 'react-native-paper';
import {primary, textcolor, textLight} from '../constants';


const [visible, setVisible] = React.useState('false');
const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);

const AllHeader = (props) =>{
    return(
        
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {null}}  style={{color:textcolor}}/>
                <Appbar.Content title={props.headtitle} style={{color:textcolor}} />
                <Appbar.Action icon="magnify" onPress={() => {null}} style={{color:textcolor}} />
                <Appbar.Action icon="md-man" onPress={() => {null}} style={{color:textcolor}} />
            </Appbar.Header>
        );
        
  }

  export default AllHeader;