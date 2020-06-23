

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { Router, Scene,Stack, Actions } from 'react-native-router-flux';
import One from './component/one';
import Two from './component/two';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

componentDidMount() {
}

  render(){
    return (
      <Router>
         <Stack key="root">
            <Scene key="one" component={One}  initial={true} />
            <Scene key="two" component={Two}  />
           

      
        </Stack>
        </Router>
    
    );
  }
  
}
const styles = StyleSheet.create({
  

});


