import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
//import logo from './assets/logo.png';
//<Text style={{ color: '#888', fontSize: 18 }}>
//<Text style={{ color: '#f3f', fontSize: 28 }}>
//<Image source={logo} style={{width: 305, height:159}}/>
// style={{width: 200, height: 205}}/>
// <Text style={{ color: '#f3f', fontSize: 18 }}>
//<Image source={{uri:"https://i.imgur.com/TkIrScD.png"}} style={styles.logo}/>
//<Image source={{uri:"https://yt3.ggpht.com/ytc/AMLnZu9eeiwH05O-x7ONB3vDYDu45M4uzXXwAzA5mET3=s176-c-k-c0x00ffffff-no-rj"}} 
//style={styles.instructions}/>
//
// logo:{
//  width: 200,
//  height: 205,
//},
//instructions:{
//  color: '#888',
//  fontsize: 18,
//},

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri:"https://yt3.ggpht.com/ytc/AMLnZu9eeiwH05O-x7ONB3vDYDu45M4uzXXwAzA5mET3=s176-c-k-c0x00ffffff-no-rj"}} 
      style={styles.logo}/>
      <Text style={styles.instructions}>
      <Text>To share a photo from your phone with a friend, press the button below!</Text>
      <StatusBar style="auto" />
      </Text>
      <TouchableOpacity
      onPress={()=>alert('Hey!!')}
      style={styles.button}>
      <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 205,
    marginBottom: 5,
    },
    instructions: {
      color: '#f3f',
      textAlign: 'center',
      //color: '#4ea0cf',
      // put in the complimentary color:
      //color: '#b15f30',
      fontSize: 20,
      marginHorizontal: 15,
    },
    button: {
      backgroundColor: '#4ea0cf',
      padding: 20,
      borderRadius: 15,
      marginTop: 25,
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
    },
});
