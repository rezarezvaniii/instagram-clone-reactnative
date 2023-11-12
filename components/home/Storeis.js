import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import Users from "./../../data/users";

const Storeis = () => {
  return (
    <View style={{ marginTop: 15 }}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {Users.map((item, index) => (
          <View key={index} style={{alignItems:"center"}}>
            <Image style={styles.storyImg} source={{ uri: item.image }} />
            <Text style={{ color: "white" }}>{item.username}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Storeis;

const styles = StyleSheet.create({
  storyImg: {
    width: 70,
    height: 70,
    borderRadius:35,
    borderWidth:3 ,
    borderColor:"tomato",
    marginLeft: 6,
  },
});
