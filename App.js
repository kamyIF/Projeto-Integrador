// import * as Animatable from "react-native-animatable";
// import {useNavigation} from "@react-navigation/native";
import { View,Text,StyleSheet, TextInput,TouchableOpacity, StatusBar } from "react-native";

// Raykkoner é legal!

export default function Register() {
    return(
      <View style={styles.container}>
        <View>
          <View style={styles.viewCentral}>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Nome Completo</Text>
              <TextInput style={styles.textInput} />
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Email</Text>
              <TextInput style={styles.textInput} />
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Nome do Usuario</Text>
              <TextInput style={styles.textInput} />
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Nome do Usuario</Text>
              <TextInput style={styles.textInput} />
            </View>
          </View>
        </View>
      <StatusBar style="auto" />
    </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#161413"
  },
  viewCentral: {
    height: 400,
    width: 300,
    borderWidth: 5,
    borderColor: "#F2B707",
    borderRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  textInputLabel: {
    color: "#F2B707"
  },
  textInput: {
    backgroundColor: "#2e2d2d",
    borderRadius: 30
  },
  textInputContainer: {
    gap: 10,
    marginBottom: 20
  }
});
