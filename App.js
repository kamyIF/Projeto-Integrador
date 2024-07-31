// import * as Animatable from "react-native-animatable";
// import {useNavigation} from "@react-navigation/native";
import { View,Text,StyleSheet, TextInput,TouchableOpacity, StatusBar } from "react-native";


export default function Register() {
    return(
      <View style={styles.container}>
        <View>
          <View style={styles.viewCentral}>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Nome de usuario</Text>
              <TextInput style={styles.textInput} 
              placeholder="Digite seu nome"/>
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Email</Text>
              <TextInput style={styles.textInput} 
              placeholder="Digite seu email"/>
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Senha</Text>
              <TextInput style={styles.textInput} 
              placeholder="Digite sua senha"/>
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Confirma senha</Text>
              <TextInput style={styles.textInput} 
              placeholder="Digite sua senha novamente"
              placeholderTextColor={"#F2B707"}/>
              
            </View>
            <View style={styles.parteInferior}>
              <Text style={styles.textInputLabel}>Possuo Cadastro</Text>
              <TouchableOpacity style = {styles.botaoCadastro}>
                <Text style = {styles.textoBotao}>Cadastrar</Text>
              </TouchableOpacity>
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
    height: 500,
    width: 350,
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
    borderRadius: 10,
    padding: 8
  },
  textInputContainer: {
    gap: 10,
    marginBottom: 20
  },
  botaoCadastro:{
    backgroundColor: "#F2B707",
    borderRadius: 5,
    padding: 6
  },
  parteInferior:{
    flexDirection: "row",
    gap: 100,
  },
  textoBotao:{
    fontWeight: "bold", 
  }
});
