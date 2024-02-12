import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import tw from 'twrnc';

const Navbar = () => {
  
  return (
    <>
      {/* Background View */}
      <View>
        
        {/* Inner Navbar View */}
        <View style={tw`bg-[#FEC96B] h-12 mt-10 mx-4 flex-row justify-between rounded-lg`}>
          
          {/* Left Section */}
          <View style={tw`h-full w-3/4 flex-row items-center`}>

            {/* Pressable area for Menu Bar */}
            <Pressable onPress={() => console.log('Menu Bar Opened')}>
              {/* Menu Logo */}
              <Image
                style={tw`w-8 h-6 mx-4 my-auto`}
                source={require('../assets/icons/menulogo.png')}
              />
            </Pressable>

            {/* Text */}
            <Text style={tw`font-bold text-2xl`}>EMPLOYEE</Text> 

          </View> 

          {/* Right Section */}
          <View style={tw`my-auto`}>

            {/* Pressable area for QR Code */}
            <Pressable onPress={() => console.log('QR Code Scanning')}>
              {/* QR Code Scan Icon */}
              <Image
                style={tw`w-8 h-8 mx-4 my-auto`}
                source={require('../assets/icons/qrscan.png')}
              />
            </Pressable>

          </View>           

        </View>
      </View>
    </>
  );
};

export default Navbar;
