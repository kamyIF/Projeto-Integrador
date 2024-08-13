// import * as Animatable from "react-native-animatable";
// import {useNavigation} from "@react-navigation/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View,Text,StyleSheet, TextInput,TouchableOpacity, StatusBar } from "react-native";


export default function Register() {
    return(
      <View style={styles.container}>
        <FontAwesome name="user-circle-o" size={60} color="#F2B707" style={styles.iconUser}/>
        <View>
          <View style={styles.viewCentral}>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Nome de usuário</Text>
              <TextInput style={styles.textInput} 
              placeholder="Digite seu nome"
              placeholderTextColor={"#b08504"}/>
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>E-mail</Text>
              <TextInput type="email" style={styles.textInput} 
              placeholder="Digite seu e-mail"
              placeholderTextColor={"#b08504"}/>
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Senha</Text>
              <TextInput style={styles.textInput} 
              secureTextEntry
              placeholder="Digite sua senha"
              placeholderTextColor={"#b08504"}/>
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Confirmar senha</Text>
              <TextInput style={styles.textInput} 
              secureTextEntry
              placeholder="Digite sua senha novamente"
              placeholderTextColor={"#b08504"}/>
              
            </View>
            <View style={styles.parteInferior}>
              <Text style={styles.textInputLabel}>Possuo cadastro</Text>
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
    paddingHorizontal: 20,
    zIndex: 1
  },
  textInputLabel: {
    color: "#F2B707"
  },
  textInput: {
    backgroundColor: "#2e2d2d",
    color: '#ffffff',
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
  },
  iconUser:{
    position: 'absolute',
    top: '15%',
  }

});
