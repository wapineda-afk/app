import { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 4000); // duración splash

    return () => clearTimeout(timer);
  }, []);

  if (mostrarSplash) {
    return (
      <View style={styles.splash}>
        <Image
          source={require('./assets/Logo_2025.png')}
          style={styles.logo}
        />
        <Text style={styles.texto}>
          App from Xeed Project
        </Text>
      </View>
    );
  }

  return (
    <WebView
      source={{ uri: "http://192.168.4.1" }}
      javaScriptEnabled
      domStorageEnabled
      startInLoadingState
    />
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: "#7A3BDF",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 400,
    height: 400,
    resizeMode: "contain"
  },
  texto: {
    marginTop: 20,
    color: "#000A66",
    fontSize: 30,
    opacity: 0.85
  }
});