import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'
const Today = () => {
  return (
    <>
    <View style={tw.style('bg-[#1DA1F2]  mt-5 mx-4 rounded-lg')}>
        <View style={tw.style('text-white px-4 pt-2')}><Text style={tw.style('font-extrabold text-2xl border-b-2 w-1/4 text-center text-white border-white')}>Today</Text></View>
        <View style={tw.style('w-full px-4 flex-row mt-3 justify-between')}>
        <Text style={tw.style('text-white  font-bold text-sm border-r-2 border-white pr-1')}>Entered Time : 8:36am </Text>
        <Text style={tw.style('text-white  font-bold text-sm pl-1')}>End Time : 6:00pm</Text>
        </View>
        <View style={tw.style('w-full px-4 flex-row my-3')}>
        <Text style={tw.style('text-white  font-bold text-xl')}>Total Hours : </Text>
        <Text style={tw.style('text-white  font-semibold text-sm my-auto')}> 9 hours 24 minutes</Text>
        </View>
    </View>
    </>
  )
}

export default Today