import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/home-logo.png")}
          style={styles.logo}
        />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/plus.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/heart.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>30</Text>
          </View>
          <Image
            source={require("../../assets/icons/messenger.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal:10
  },
  iconContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginLeft: 10,
  },
  badge:{
    width:25,
    justifyContent:"center",
    alignItems:"center",
    height:18,
    backgroundColor:'tomato',
    position:"absolute",
    zIndex:100,
    borderRadius:25,
    left:20,
    top:-5
  },
  badgeText:{
    fontWeight:'600',
    color:'white'
  }
});
