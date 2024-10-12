import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  console.log("app executed");

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}></View>
      <View
        style={[styles.innerContainer, { backgroundColor: "gold", flex: 2 }]}
      ></View>
      <View
        style={[styles.innerContainer, { backgroundColor: "silver" }]}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    flex: 1,
  },
  innerContainer: {
    backgroundColor: "red",
    flex: 1,
  },
});
