import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import Header from "../components/home/Header.js";
import Storeis from "../components/home/Storeis.js";
import Posts from './../data/posts.js'
import Post from './../components/home/Post.js'
const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header />
      <Storeis/>
      {Posts.map((post , index)=>(
        <Post key={index} post={post} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
