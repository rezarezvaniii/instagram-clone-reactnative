import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./components/navigators/StackNavigator";

export default function App() {
  
  return (
    
    // <HomeScreen/>
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
