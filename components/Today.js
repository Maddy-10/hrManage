import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'
import ProgressBar from 'react-native-progress/Bar';
import tailwind from 'twrnc';
const Today = () => {
  const today = new Date()
  const [date,setDate] = useState({
    date : null,
    month : null,
    year : null
  })
  useEffect(()=>{
    const dateObj = {
      date : today.getDate(),
      month : today.getMonth()+1,
      year : today.getFullYear()
    }
    setDate({...dateObj})
  },[])
  return (
    <>
    <View style={tw.style('bg-[#1DA1F2]  mt-5 mx-4 rounded-lg')}>
        <View style={tw.style('text-white px-4 pt-2')}><Text style={tw.style('font-extrabold text-2xl border-b-2 w-1/4 text-center text-white border-white')}>Today</Text></View>
        <View style={tw.style('w-full px-4 flex-row mt-3 justify-between')}>
        <Text style={tw.style('text-white  font-bold text-sm border-r-2 border-white pr-1')}>Entered Time : 8:36am </Text>
        <Text style={tw.style('text-white  font-bold text-sm pl-1')}>End Time : 6:00pm</Text>
        </View>
        <View style={tw.style('w-full px-4 flex-row my-auto py-2')}>
        <Text style={tw.style('text-white my-auto font-bold text-xl')}>Total Hours : </Text>
        <ProgressBar  progress={0.9} style={tailwind.style('w-1/2 mx-auto my-auto h-auto')} color='orange' />
        </View>
    </View>
    </>
  )
}

export default Today