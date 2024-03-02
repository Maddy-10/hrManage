// Importing necessary modules
import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import tw from "twrnc";
import OldRecord from "./OldRecord";
import { useNavigation } from "@react-navigation/native";

const CalendarComponent = () => {
  const { navigate } = useNavigation();

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
    markedDates[selectedDate] = { selected: true, selectedColor: "#68B0EE" };
  }

  // Function to go back from old record view
  const back = () => {
    setViewOldRecord(false);
    setSelectedDate(null);
  };

  //Function to check that date is selected
  const getrecord = () => {
    if (selectedDate != null) {
      navigate("OldRecordDetails", { selectedDate });
      //console.log(selectedDate);
    }
  };

  return (
    <>
      {/* Calendar component */}
      <View style={tw.style("mx-4 rounded-lg mt-5")}>
        <Calendar
          style={tw.style("bg-[#68B0EE] h-[380px] border rounded-lg")}
          theme={{
            monthTextColor: "white",
            textMonthFontSize: 20,
            textMonthFontWeight: "bold",
            arrowColor: "white",
            textSectionTitleColor: "#FFFFFF",
            calendarBackground: "white",
          }}
          onDayPress={handleDayPress}
          markedDates={markedDates}
        />

        {/* Button to view old records */}
        {selectedDate ? (
          <Pressable
            onPress={() => {
              navigate("OldRecordDetails", { selectedDate });
            }}
            style={tw.style("bg-[#1DA1F2] w-1/3 rounded mt-5 mx-auto")}
            android_ripple={{ color: "#F8CAD" }}
          >
            <Text style={tw.style("text-center text-white font-extrabold text-lg")}>
              Get
            </Text>
          </Pressable>
        ) : (
          <View style={tw.style("bg-[#1DA1F2] rounded mt-5 p-4")}>
            <Text style={tw.style("text-sm text-white font-semibold text-center")}>
              {" "}
              please Select the date of record
            </Text>
          </View>
        )}
      </View>
    </>
  );
};

export default CalendarComponent;
