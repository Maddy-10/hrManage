import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import { LoginState } from "../context/LoginState";
import tailwind from "twrnc";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function Profile() {
  const { setLoginState } = useContext(LoginState);
  return (
    <View style={tailwind.style("h-[680px] mt-5 pt-5")}>
      <View style={tailwind.style('flex-row mx-4 justify-between')}>
      <Text style={tailwind.style("text-2xl underline")}>Profile</Text>
      <Pressable
        style={tailwind.style(
          "border rounded flex-row mt-auto p-1 w-1/4 border-red-400"
        )}
        onPress={() => setLoginState(true)}
        android_ripple={{ color: "#F27676" }}
      >
        <SimpleLineIcons
          style={tailwind.style("my-auto ")}
          name="logout"
          size={20}
          color="red"
        />
        <Text style={tailwind.style("ml-2 text-sm text-red-500")}>Logout</Text>
      </Pressable>
      </View>
      <Image
        style={tailwind.style(
          "w-[100px] h-[100px] mx-auto mt-4 border border-black rounded-full"
        )}
        source={require("../assets/image/user.png")}
      />
      <Text style={tailwind.style("mx-auto text-xl mt-1")}>2001001</Text>
      <Text style={tailwind.style("mx-auto text-sm")}>Web Developer</Text>
      <ScrollView>
      <View style={tailwind.style("mx-5 text-xl mt-5 border-b flex-row justify-between")}>
      <Text style={tailwind.style('text-lg')}>EmpID :</Text>
        <Text style={tailwind.style('text-lg')}>200101</Text>
      </View>
      <View style={tailwind.style("mx-5 text-xl mt-4 border-b flex-row justify-between")}>
      <Text style={tailwind.style('text-lg')}>Name :</Text>
        <Text style={tailwind.style('text-lg')}>Maddy</Text>
      </View>
      <View style={tailwind.style("mx-5 text-xl mt-4 border-b flex-row justify-between")}>
      <Text style={tailwind.style('text-lg')}>Email :</Text>
        <Text style={tailwind.style('text-lg')}>maddy@gmail.com</Text>
      </View>
      <View style={tailwind.style("mx-5 text-xl mt-4 border-b flex-row justify-between")}>
      <Text style={tailwind.style('text-lg')}>Gender :</Text>
        <Text style={tailwind.style('text-lg')}>Male</Text>
      </View>
      <View style={tailwind.style("mx-5 text-xl mt-4 border-b flex-row justify-between")}>
      <Text style={tailwind.style('text-lg')}>DOB :</Text>
        <Text style={tailwind.style('text-lg')}>10-05-2003</Text>
      </View>
      <View style={tailwind.style("mx-5 text-xl mt-4 border-b flex-row justify-between")}>
      <Text style={tailwind.style('text-lg')}>Phone :</Text>
        <Text style={tailwind.style('text-lg')}>8825893275</Text>
      </View>
      <View style={tailwind.style("mx-5 text-xl mt-4 border-b flex-row justify-between")}>
      <Text style={tailwind.style('text-lg')}>Address :</Text>
        <Text style={tailwind.style('text-lg')}>Villapuram</Text>
      </View>
      <View style={tailwind.style("mx-5 text-xl mt-4 border-b flex-row justify-between")}>
      <Text style={tailwind.style('text-lg')}>Role :</Text>
        <Text style={tailwind.style('text-lg')}>Web Developer</Text>
      </View>            
      </ScrollView>      
    </View>
  );
}
