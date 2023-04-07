
import React ,{Component}from 'react';
import {  View , StyleSheet } from "react-native";
import Login from "./Login"
import Signup from "./Signup"

export default function Page() {
  return (
    <View style={styles.container}>
      
      {/* <Login />
       */}
       <Signup />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  
  },



});
