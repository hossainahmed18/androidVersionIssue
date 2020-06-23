import * as React from 'react';
import { StyleSheet, Text, View, Alert, Button, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import axios from 'axios';




export default class One extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error:1,
      
      
    };
  }

  login() {
    let object = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://3.0.176.40:8080/nidle/auth/login', object
    )
      .then((Response) => {

        Actions.two()
      })
      .catch((error) => {

        Alert.alert(
          'Error Occured',
          'Do you want to show error message?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => this.setState({error:JSON.stringify(error)})

            },
          ],
        )

      });

    this.setState({
      email: '',
      password: ''
    });
  }

  errorMsg(error){
    return(
      <ScrollView>
        <Text>{JSON.stringify(error)}</Text>
      </ScrollView>
    )
     
  }

  render() {
    return (
      <ScrollView>
        <View style={{ marginTop: 30, marginLeft: 50 }}>
          <Text style={{ fontSize: 20 }}>Email</Text>
          <TextInput style={{ fontSize: 20 }} placeholder="Enter Email" onChangeText={(email) => this.setState({ email: email })} value={this.state.email} ></TextInput>
        </View>
        <View style={{ marginTop: 5, marginLeft: 50 }}>
          <Text style={{ fontSize: 20 }}>password</Text>
          <TextInput style={{ fontSize: 20 }} placeholder="****" onChangeText={(password) => this.setState({ password: password })} value={this.state.password} ></TextInput>
        </View>
        <TouchableOpacity onPress={() => this.login()} style={styles.button}><Text style={styles.buttontext}>Login</Text></TouchableOpacity>
         {
            this.state.error == 1?
             <Text></Text>:
            <Text>{this.state.error}</Text>

         }
      </ScrollView>
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
  button: {
    width: 150,
    marginTop: 5,
    borderRadius: 25,
    marginVertical: 15,
    paddingVertical: 8,
    backgroundColor: '#74B9FF',
    marginLeft: 40
  },
  buttontext: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },
});
