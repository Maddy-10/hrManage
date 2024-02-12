import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import tw from 'twrnc'

const OldRecord = (props) => {
  return (
    <>
    {/* OldRecord View container */}
    <View style={tw.style('bg-[#F1C28E]  my-5 mx-4 rounded-lg')}>

        {/* Date View container */}
        <View style={tw.style('text-black px-4 pt-2 flex-row justify-between')}>
            {/* Date text */}
            <Text style={tw.style('font-extrabold text-2xl border-b-2 w-1/2 text-center')}>{props.date}</Text>

            {/* Pressable component */}
            <Pressable style={tw.style('my-auto')} onPress={props.component}>                
                {/* Image component */}
                <Image style={tw`w-5 h-5 mx-4 my-auto`} source={require('../assets/icons/back.png')}/>                
            </Pressable>
        </View>

        {/* Time information container */}
        <View style={tw.style('w-full px-4 flex-row mt-3 justify-between')}>
            {/* Entered time */}
            <Text style={tw.style('text-black  font-bold text-sm border-r-2 pr-1')}>Entered Time : 9:36am </Text>

            {/* End time */}
            <Text style={tw.style('text-black  font-bold text-sm')}>End Time : 6:00pm</Text>
        </View>

        {/* Total hours container */}
        <View style={tw.style('w-full px-4 flex-row my-3')}>
            {/* Total hours label */}
            <Text style={tw.style('text-black  font-bold text-xl')}>Total Hours : </Text>

            {/* Total hours value */}
            <Text style={tw.style('text-black  font-semibold text-sm my-auto')}> 8 hours 24 minutes</Text>
        </View>

    </View>
    </>
  )
}

export default OldRecord
