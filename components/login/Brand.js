import { StyleSheet, Image, View } from "react-native";
import React from "react";

const Brand = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logoImg}
        source={require("../../assets/login-logo.png")}
      />
    </View>
  );
};

export default Brand;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  logoImg: {
    width: 100,
    height: 100,
  },
});
