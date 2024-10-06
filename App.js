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
      <Button
        color="red"
        title={"Click me"}
        onPress={() => {
          Alert.alert("My title", "message", [
            { text: "yes", onPress: () => console.log("yes pressed") },
            { text: "No", onPress: () => console.log("no pressed") },
          ]);
        }}
      />

      <StatusBar style="auto" />
    </View>
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
