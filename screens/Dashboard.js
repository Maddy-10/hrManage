import React from 'react'
import Navbar from '../components/Navbar'
import Today from '../components/Today'
import { ScrollView, View } from 'react-native'
import tw from 'twrnc';
import CalendarComponent from '../components/CalendarComponent';

const Dashboard = () => {
  return (
    <> 
    <ScrollView  style={tw`bg-[#1F334B] w-full h-full`}>
      <Navbar/>
      <Today/>
      <CalendarComponent/>
    </ScrollView>
        
    </>
  )
}

export default Dashboard