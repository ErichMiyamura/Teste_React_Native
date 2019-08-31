import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, Image} from 'react-native';

import bgImage from '../image/HubblefyBG.jpg'
import logo from '../image/HubblefyLogo.png'

const Page1 = ({ navigation }) => (

  <ImageBackground source={bgImage} style={styles.backgroundContainer}>

          <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.text1}>Membros da Org</Text>
              <Text style={styles.text2}>Chegou a hora de adicionar os primeiros membros da sua nova org:</Text>

               <TouchableOpacity style={styles.addMembroButton} onPress={() => {navigation.navigate('Add')}}>
                  <Text style={styles.addMembroButtonText}>Adicionar Membro</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.addOngButton}>
                  <Text style={styles.addOngButtonText}>Ir para Ong</Text>
               </TouchableOpacity>
          </View>

  </ImageBackground>
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
    height: '18%',
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
  addMembroButton: {
    position: 'absolute',
    borderRadius: 10,
    width: 320,
    height: 68,
    top: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74DF00'
  },
  addMembroButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  addOngButton: {
    position: 'absolute',
    borderRadius: 10,
    width: 320,
    height: 68,
    top: 385,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFBF00'
  },
  addOngButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default Page1;