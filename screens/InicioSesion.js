import * as React from "react";
import { Image, TextInput } from "react-native";import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import axios from "axios";
import Config from "../config/Config";


const InicioSesion = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    try {
      console.log("Presionaste el botón de inicio de sesión...");
      const response = await axios.post(`${Config.apiUrl}/login`,{
        username: email,
        password: password,
      });
      if(response.data.authenticated){
        navigation.navigate("Inicio")
      } else {
        Alert.alert('Error','Credenciales incorrectas');
      }
    }catch(error){
      console.error('Error al iniciar sesion:', error);
      Alert.alert('Error', 'Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  }

  return (
    <View style={styles.container35}>
            <Image
              style={styles.image17Icon}
              contentFit="cover"
              source={require("../assets/image-17.png")}
            />
            <Text style={styles.olvidasteTuContrasea}>
              Olvidaste tu contraseña?
            </Text>
            <View style={[styles.textbox1, styles.textboxPosition]}>
              <View style={[styles.textfield, styles.button20Layout]}>
                <Text style={[styles.email, styles.emailTypo]}>Email</Text>
                {/* Agregado TextInput para correo electrónico */}
                <TextInput
                  style={[styles.correoElectrnico, styles.emailTypo]}
                  onChangeText={setEmail}
                  value={email}
                  placeholder="Correo electrónico"
                />
                <Image
                  style={[styles.mailIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/mail.png")}
                />
              </View>
            </View>
            <View style={[styles.textbox2, styles.textboxPosition]}>
              <View style={[styles.textfield, styles.button20Layout]}>
                <Text style={[styles.email, styles.emailTypo]}>Contraseña</Text>
                {/* Agregado TextInput para contraseña */}
                <TextInput
                  style={[styles.correoElectrnico, styles.emailTypo]}
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Ingresa contraseña"
                  secureTextEntry
                />
                <Image
                  style={[styles.hideIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/hide.png")}
                />
                <Image
                  style={[styles.mailIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/lock.png")}
                />
              </View>
            </View>
            <Pressable
              style={[styles.button20, styles.button20Layout]}
              onPress={handleLogin}
            >
              <Text style={styles.iniciarSesin}>Iniciar Sesión</Text>
            </Pressable>
            <Text style={[styles.noTienesCuenta, styles.registrarsePosition]}>
              No tienes cuenta?
            </Text>

            <Image
              style={styles.image41Icon}
              contentFit="cover"
              source={require("../assets/image-41.png")}
            />
            <Text style={[styles.registrarse, styles.registrarsePosition]}>
              Registrarse
            </Text>
            <Text style={[styles.hola, styles.holaPosition]}>Hola!</Text>
            <Text style={[styles.bienvenido, styles.holaPosition]}>
              Bienvenido
            </Text>


    </View>
  );
};

const styles = StyleSheet.create({

  textboxPosition: {
    height: 71,
    backgroundColor: Color.colorGray_300,
    left: 20,
    right: 20,
    position: "absolute",
  },
  button20Layout: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  emailTypo: {
    lineHeight: 26,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    height: 20,
    width: 20,
    marginTop: -9.5,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  registrarsePosition: {
    top: 690,
    left: "50%",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  holaPosition: {
    left: 18,
    textAlign: "left",
    position: "absolute",
  },
  image17Icon: {
    maxWidth: "100%",
    height: 192,
    overflow: "hidden",
    top:30,

  },
  olvidasteTuContrasea: {
    top: 558,
    right: 22,
    textAlign: "right",
    color: Color.colorBlueviolet,
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  correoElectrnico: {
    marginTop: -12.5,
    left: 44,
    color: Color.colorSilver,
    textAlign: "left",
    top: "50%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    width: 300,
  },
  mailIcon: {
    left: 16,
  },
  textfield: {
    top: 27,
    right: 1,
    bottom: 1,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xs,
    left: 0,
  },
  email: {
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_base,
    top: -25,
    left: 0,
  },
  textbox1: {
    top: 388,
  },
  hideIcon: {
    right: 15,
  },
  textbox2: {
    top: 479,
  },
  iniciarSesin: {
    marginTop: -13,
    marginLeft: -50.5,
    color: Color.colorWhite,
    left: "50%",
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_base,
    top: "50%",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  button20: {
    top: 608,
    backgroundColor: Color.colorBlueviolet,
    height: 44,
    left: 20,
    right: 20,
    borderRadius: Border.br_xs,
    overflow: "hidden",
  },
  noTienesCuenta: {
    marginLeft: -150.5,
    color: Color.colorGray_100,
    textAlign: "right",
  },
  image41Icon: {
    top: 220,
    left: 14,
    width: 350,
    height: 88,
    position: "absolute",
  },
  registrarse: {
    marginLeft: 7.5,
    display: "flex",
    alignItems: "center",
    width: 90,
    height: 21,
    textAlign: "left",
    color: Color.colorBlueviolet,
  },
  hola: {
    top: 295,
    fontSize: 32,
    lineHeight: 48,
    fontFamily: FontFamily.epilogueBold,
    width: 92,
    color: Color.colorGray_100,
    fontWeight: "700",
  },
  bienvenido: {
    top: 328,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    color: Color.colorLightslategray,
    width: 200,
    fontFamily: FontFamily.interRegular,
  },

  container35: {
    height: "100%",
    width:"100%",
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    flex: 1,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
});
export default InicioSesion;