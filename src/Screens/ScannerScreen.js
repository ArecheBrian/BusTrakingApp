import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Box } from "native-base";
import { Scanner } from '../Components/ScannerComponents/ScannerComponents';
import { updateSaldo } from '../Supabase/saldo/updateSaldo';


export  const ScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Scanner Results')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }
  const id = "40ada8ca-c8d7-46e3-9ce5-34ed775c9ae2"
  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);
  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    const saldo = data - 10
    data < 10? Alert.alert("Saldo insuficinete"):updateSaldo(saldo,id)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <Box flex={1} bg={"blueGray.50"}>
      <Scanner/>
      <Box style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </Box>
      </Box>)
  }
  if (hasPermission === false) {
    return (
      <Box flex={1} bg={"blueGray.50"}>
      <Scanner/>
      <Box style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </Box>
      </Box>)
  }

  return (
    // Return the View
    <Box flex={1} bg={"blueGray.50"}>
      <Scanner/>
    <Box style={styles.container}>
      <Box style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </Box>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
    </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});