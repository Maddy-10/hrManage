import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import tw from 'twrnc';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Navbar = () => {
 
  return (
    
      //{/* Background View */}
      <View>
        
        {/* Inner Navbar View */}
        <View style={tw`bg-[#E1E8ED] border border-[#1DA1F2] h-12 mx-4 flex-row justify-between rounded-lg`}>
          
          {/* Left Section */}
          <View style={tw`h-full w-3/4 flex-row items-center`}>

            {/* Pressable area for Menu Bar */}
            

            {/* Text */}
            <Text style={tw`font-bold text-2xl px-2`}>EMPLOYEE</Text> 

          </View> 

          {/* Right Section */}
          <View style={tw`my-auto`}>

            {/* Pressable area for QR Code */}
            <Pressable onPress={()=>{console.log("User Avatar");}}>
              {/* QR Code Scan Icon */}
              <Image
                style={tw`w-8 h-8 border border-black rounded-full mx-4 my-auto`}
                source={require('../assets/image/user.png')}
              />
            </Pressable>

          </View>           

        </View>
      </View>
    
  );
};

export default Navbar;
