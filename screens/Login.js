import React from "react";
import { View, Text, TextInput, Pressable, Platform, StatusBar } from "react-native";
import tw from "twrnc";
import useLogin from "../hooks/useLogin";
import { useNavigation } from "@react-navigation/native";

export default function Login({ navigation }) {
  // Using custom hook to manage login state
  const { input, error, initialError, inputHandler, submitHandler, setError } =
    useLogin();

  const loginPress = () => {
    const log = submitHandler();
    if (log === true) {
      console.log("Login Success");
    }
  };

  return (
    <>
          <StatusBar style="dark" />
      {/* Login page container */}
      <View
        style={tw.style("flex-1 justify-center bg-gray-100 w-full h-full")}
      >
        {/* Login Title */}
        

        {/* Form container */}
        <View
          style={tw.style(
            "bg-[#68B0EE] border border-black w-3/4 mx-auto rounded-lg py-5 justify-center"
          )}
        >
          <Text style={tw.style("text-white underline text-3xl font-bold mx-auto")}>
          Login
        </Text>
          {/* Username input */}
          <TextInput
            style={tw.style("bg-[#ffffff] w-3/4 mx-auto rounded-xl mt-10 p-1 pl-3")}
            placeholder="Enter Username"
            value={input.username}
            onChangeText={(value) => {
              inputHandler("username", value);
              setError(initialError);
            }}
          />
          {error.username && (
            <Text style={tw.style("text-red-500 mt-2 mx-auto")}>
              {error.username}
            </Text>
          )}

          {/* Password input */}
          <TextInput
            style={tw.style("bg-[#ffffff] w-3/4 mx-auto mt-5 p-1 rounded-xl pl-3")}
            secureTextEntry={true}
            placeholder="Enter Password"
            value={input.password}
            onChangeText={(value) => {
              inputHandler("password", value);
              setError(initialError);
            }}
          />
          {error.password && (
            <Text style={tw.style("text-red-500 mt-2 mx-auto")}>
              {error.password}
            </Text>
          )}

          {/* Submit button */}
          <View style={tw.style("w-1/3 mx-auto mt-10")}>
            <Pressable
              style={tw.style("bg-[#1DA1F2] border border-gray-200 rounded p-1")}
              onPress={loginPress}
              android_ripple={{ color: "#325E93" }}
            >
              <Text
                style={tw.style("text-white text-center text-sm font-bold")}
              >
                SUBMIT
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}
