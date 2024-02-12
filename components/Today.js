import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'
const Today = () => {
  return (
    <>
    <View style={tw.style('bg-[#F1C28E]  mt-5 mx-4 rounded-lg')}>
        <View style={tw.style('text-black px-4 pt-2')}><Text style={tw.style('font-extrabold text-2xl border-b-2 w-1/4 text-center')}>Today</Text></View>
        <View style={tw.style('w-full px-4 flex-row mt-3 justify-between')}>
        <Text style={tw.style('text-black  font-bold text-sm border-r-2 pr-1')}>Entered Time : 8:36am </Text>
        <Text style={tw.style('text-black  font-bold text-sm')}>End Time : 6:00pm</Text>
        </View>
        <View style={tw.style('w-full px-4 flex-row my-3')}>
        <Text style={tw.style('text-black  font-bold text-xl')}>Total Hours : </Text>
        <Text style={tw.style('text-black  font-semibold text-sm my-auto')}> 9 hours 24 minutes</Text>
        </View>
    </View>
    </>
  )
}

export default Today