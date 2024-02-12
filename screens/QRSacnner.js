import React, { useState, useEffect } from "react";
import { Text, View, Button, StatusBar, Image } from "react-native"; // Removed unnecessary imports
import { BarCodeScanner } from "expo-barcode-scanner";
import tw from 'twrnc';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      try {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      } catch (error) {
        console.error("Error requesting camera permission:", error);
        setHasPermission(false); // Handle permission denied scenario
      }
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleQrCodeScanned = ({ data }) => {
    setScanned(true);
    setText(data);
  };

  if (hasPermission === null) {
    return <Text style={tw.style('justify-center items-center text-center')}>Requesting camera permission...</Text>; // Requesting Camara Permission
  }
  if (hasPermission === false) {
    return <Text style={tw.style('justify-center items-center text-center')}>No access to camera.</Text>; // Camera Access Denied
  }

  return (
    <>
      <StatusBar style='auto' />
      <View style={tw.style('flex-1 justify-center items-center bg-[#1F334B]')}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleQrCodeScanned}
          style={tw.style('w-full h-full rounded-lg mt-10 flex-3')}
        >
            <Image
            style={tw`w-full h-3/4 mx-auto my-auto`}
            source={require('../assets/icons/qrborder.png')}
          />
        </BarCodeScanner>
        <View style={tw.style('flex-1')}>
          {scanned ? (
            <View style={tw.style('my-auto')}>
              <Text style={tw.style('text-lg m-4 text-center text-white')}>{text}</Text>
              <Button title='Scan again' onPress={() => setScanned(false)} color='tomato' />
            </View>
          ) : (
            <Text style={tw.style('text-lg m-4 text-center text-white my-auto')}>Looking for QR Code...</Text>
          )}
        </View>
      </View>
    </>
  );
}
