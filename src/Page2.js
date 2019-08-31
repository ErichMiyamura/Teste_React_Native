
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, Image, TextInput, Picker} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import bgImage from '../image/HubblefyBG.jpg'
import logo from '../image/HubblefyLogo.png'

const Page2 = ({ navigation }) => (
  <ScrollView>
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>

            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.text1}>Membros da Org</Text>
              <Text style={styles.text2}>Chegou a hora de adicionar os primeiros membros da sua nova org:</Text>
            </View>

            <View>
              <TextInput 
                placeholder= 'Nome' 
                placeholderTextColor= '#FFBF00'
                fontWeight= 'bold'
                style={styles.inputNome}
                autoFocus={true} //value={this.state.name}
                /* onChangeText={name => this.setState({ name })}*/ />
              <TextInput 
                placeholder= 'Email' 
                placeholderTextColor= '#FFBF00'
                fontWeight= 'bold'
                style={styles.inputEmail}
                keyboardType= 'email-address' //value={this.state.email}
                /* onChangeText={email => this.setState({ email })}*/ /> 
              <TextInput 
                placeholder= 'Departamento' 
                placeholderTextColor= '#FFBF00'
                fontWeight= 'bold'
                style={styles.inputDepartamento}
                autoFocus={true} //value={this.state.department}
                /* onChangeText={department => this.setState({ department })}*/ />
              <Picker  
                style={styles.inputPicker}
                onValueChange={(itemValue) => this.setState({nivel: itemValue})}>
                <Picker.Item label="Nível de Acesso" value="" />  
                <Picker.Item label="Admin" value="Admin" />
                <Picker.Item label="Usuário" value="Usuário" />
              </Picker>  
            </View>

            <View>
              <TouchableOpacity style={styles.addSalvarButton} onPress={() => {}}>
                <Text style={styles.addSalvarText}>Salvar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.addCancelarButton} onPress={() => {navigation.navigate('Cancelar')}}>
                <Text style={styles.addCancelarText}>Cancelar</Text>
              </TouchableOpacity>
            </View>

    </ImageBackground>
  </ScrollView>  
);

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '55%',
    height: '15%',
    marginTop: 50
  },
  text1: {
    color: '#6E6E6E',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginRight: 180,
    margin: 10
  },
  text2: {
    color: '#BDBDBD',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 45
  },
  inputNome: {
    marginTop: 1,
    width: 320,
    backgroundColor: '#FFF',
    height: 68,
    borderWidth: 3,
    borderColor: '#FFBF00',
    margin: 45,
    borderRadius: 10
  }, 
  inputEmail: {
    bottom: 60,
    width: 320,
    backgroundColor: '#FFF',
    height: 68,
    borderWidth: 3,
    borderColor: '#FFBF00',
    margin: 45,
    borderRadius: 10
  },
  inputDepartamento: {
    bottom: 120,
    width: 320,
    backgroundColor: '#FFF',
    height: 68,
    borderWidth: 3,
    borderColor: '#FFBF00',
    margin: 45,
    borderRadius: 10
  },
  inputPicker: {
    bottom: 180,
    width: 320,
    height: 68,
    margin: 45,
  },
  addSalvarButton: {
    borderRadius: 10,
    width: 320,
    height: 68,
    bottom: 240,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BDBDBD',
    margin: 45
  },
  addSalvarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  addCancelarButton: {
    borderRadius: 10,
    width: 320,
    height: 68,
    bottom: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    margin: 45
  },
  addCancelarText: {
    color: '#FFBF00',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default Page2;