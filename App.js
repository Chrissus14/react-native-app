import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Screen from "./App/components/Screen";
import { Button, Image } from "react-native";
import ImageInput from "./App/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    // const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // if (!granted) alert("Necesitas los permisos para acceder a la biblioteca");
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted)
      alert("Necesitas aceptar los permisos para accesar a la biblioteca");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}
