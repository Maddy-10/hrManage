import React, { useState, useEffect } from "react";
import { Text, View, Button, StatusBar, Image } from "react-native"; // Removed unnecessary imports
import { BarCodeScanner } from "expo-barcode-scanner";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("");
  const { navigate } = useNavigation();

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
    return (
      <Text
        style={tw.style(
          "justify-center items-center my-auto mt-40 h-full text-center"
        )}
      >
        Requesting camera permission...
      </Text>
    ); // Requesting Camara Permission
  }
  if (hasPermission === false) {
    return (
      <Text
        style={tw.style(
          "justify-center items-center my-auto mt-40 h-full text-center"
        )}
      >
        No access to camera.
      </Text>
    ); // Camera Access Denied
  }

  return (
    <>
      <StatusBar style="auto" />
      <View
        style={tw.style(
          "flex-1 relative justify-center items-center bg-[#1DA1F2]"
        )}
      >
        <Text style={tw.style("text-xl text-white pt-20")}>
          Scan Your QR CODE
        </Text>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleQrCodeScanned}
          style={tw.style("w-3/4 h-full rounded-lg mx-auto flex-3")}
        >
          <Image
            style={tw`w-full h-3/4 mx-auto my-auto`}
            source={require("../assets/icons/qrborder.png")}
          />
        </BarCodeScanner>
        <View style={tw.style("flex-1")}>
          {scanned ? (
            <View style={tw.style("my-auto")}>
              <Text style={tw.style("text-lg m-4 text-center text-white")}>
                You Attendence is Noted
              </Text>
              <Button
                title="Scan again"
                onPress={() => setScanned(false)}
                color="tomato"
              />
            </View>
          ) : (
            <Text style={tw.style("text-lg m-4 text-center text-white")}>
              Looking For QR Code
            </Text>
          )}
        </View>
      </View>
    </>
  );
}
