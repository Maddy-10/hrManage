import React from 'react'
import Navbar from '../components/Navbar'
import Today from '../components/Today'
import { ScrollView, View } from 'react-native'
import tw from 'twrnc';
import CalendarComponent from '../components/CalendarComponent';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

const Dashboard = () => {
  return (
    <> 
    <StatusBar style='dark'/>
    <ScrollView  style={tw`bg-white w-full h-full pt-10`}>
      <SafeAreaView>
      <Navbar/>
      <Today/>
      <CalendarComponent/>
      </SafeAreaView>
    </ScrollView>
        
    </>
  )
}

export default Dashboard