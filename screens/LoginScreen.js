import { StyleSheet, Text, View , Image } from "react-native";
import React from "react";
import Brand from '../components/login/Brand.js'
import FormLogin from "../components/login/FormLogin.js";


const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Brand />
      <FormLogin />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
  
});
