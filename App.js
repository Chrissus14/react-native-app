import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Screen from "./App/components/Screen";
import { Button, Image } from "react-native";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (!granted) alert("Necesitas los permisos para acceder a la biblioteca");
    // const { granted } = await ImagePicker.getCameraPermissionsAsync();
    // if (!granted)
    //   alert("Necesitas aceptar los permisos para accesar a la biblioteca");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen>
      <Button title="Select image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}
