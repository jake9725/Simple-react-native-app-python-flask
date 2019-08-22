{/* 
  Just make changes in line 28 to make the magic : - )
*/}

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 50,
    backgroundColor: '#FF6666',
    alignItems: "center" ,
    justifyContent: "center",
  },
  red: {
    color: 'red',
  },
});


class HttpExample extends Component {
   state = {
      data: ''
   }
   componentDidMount = () => {
      fetch('http://<YOUR FLASK SERVER IP>/time', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
            <Text style={styles.bigBlue}>
               {this.state.data.time}
            </Text>
         </View>
      )
   }
}
export default HttpExample
