import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from "expo-image-manipulator";

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
    };

  return (
    <View style={styles.container}>
    <Image source={{uri:"https://yt3.ggpht.com/ytc/AMLnZu9eeiwH05O-x7ONB3vDYDu45M4uzXXwAzA5mET3=s176-c-k-c0x00ffffff-no-rj"}} 
    style={styles.logo}/>
    <Text style={styles.instructions}>
    <Text>To share a photo from your phone with a friend, press the button below!</Text>
    </Text>

    <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
         <Text style={styles.buttonText}>Share this photo</Text>
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
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
    },
});
