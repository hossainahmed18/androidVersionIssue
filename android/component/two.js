import * as React from 'react';
import { StyleSheet, Text, View, Alert,Button} from 'react-native';

import { Router, Scene,Stack,Actions } from 'react-native-router-flux';

export default class TWo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    
      }
    }
    componentDidMount(){
      
    }

    render(){
      return (
        
        <View>
            <Button style={[styles.container,styles.margin]} onPress={()=>Alert.alert("Successfully logged in Android 10")} title="Successfully Loggedin"> </Button>
        </View>

            
      );
    }
    
  }

 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    margin:{
      marginTop:10,
       marginBottom:20
    }
  });