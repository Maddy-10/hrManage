// Importing necessary modules
import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import tw from 'twrnc';
import OldRecord from './OldRecord';

const CalendarComponent = () => {

  // State to store selected date
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle day press event on calendar
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  // State to toggle viewing old records
  const [viewOldRecord, setViewOldRecord] = useState(false);

  // Object to mark selected dates on calendar
  const markedDates = {};
  if (selectedDate) {
    markedDates[selectedDate] = { selected: true, selectedColor: '#F3AB9D' };
  }

  // Function to go back from old record view
  const back = () => {
    setViewOldRecord(false);
    setSelectedDate(null);
  };

  //Function to check that date is selected
  const getreord = () =>{
    if(selectedDate != null){
      setViewOldRecord(true);
      //console.log(selectedDate);
    }
  }

  return (
    <>
      {/* Calendar component */}
      <View style={tw.style('mx-4 rounded-lg mt-5')}>
        <Calendar
          style={tw.style('bg-[#FEC96B] rounded-lg')}
          theme={{
            monthTextColor: 'black',
            textMonthFontSize: 20,
            textMonthFontWeight: 'bold',
            arrowColor: 'black',
            textSectionTitleColor: 'black',
            calendarBackground: '#FEC96B',
          }}
          onDayPress={handleDayPress}
          markedDates={markedDates}
        />

        {/* Button to view old records */}
        {selectedDate ? <Pressable
          onPress={getreord}
          style={tw.style('bg-[#F3AB9D] w-1/5 rounded mt-2 mx-auto')}
          android_ripple={{ color: '#F8CAD' }}>          
            <Text style={tw.style('text-center font-extrabold text-lg')}>
              Get
            </Text>          
        </Pressable> : <View style={tw.style('bg-[#F1C28E] rounded mt-10 p-4')}><Text style={tw.style('text-sm font-semibold text-center')}> please Select the date of record</Text></View>}        
      </View>
      {/* OldRecord component */}
      {viewOldRecord && <OldRecord date={selectedDate} component={back} />}
    </>
  );
};

export default CalendarComponent;
