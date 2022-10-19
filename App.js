import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from "expo-image-manipulator";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

// THIS APP.JS WITHIN 01-IMAGESHARE HAS NOW BEEN GITHUBBED! 19/10/2022
//earlier default code
//<Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);


  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    if (Platform.OS === 'web') {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    const imageTmp = await ImageManipulator.manipulateAsync(selectedImage.localUri);
    await Sharing.shareAsync(imageTmp.uri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }


  return (
    <View style={styles.container}> 
      <Image source={{uri:"https://yt3.ggpht.com/ytc/AMLnZu9eeiwH05O-x7ONB3vDYDu45M4uzXXwAzA5mET3=s176-c-k-c0x00ffffff-no-rj"}} 
    style={styles.logo}/>     
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, press the button below!
      </Text>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button2}>
        <Text style={styles.buttonText2}>         Reset         </Text>
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
    height: 200,
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
    button2: {
      backgroundColor: '#4ea0cf',
      padding: 8,
      borderRadius: 15,
      marginTop: 5,
    },
    buttonText2: {
      fontSize: 20
      ,
      color: '#fff',
    },
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: "contain"
    }
});
