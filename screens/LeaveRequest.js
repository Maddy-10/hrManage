import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import tailwind from "twrnc";
import DatePicker from "react-native-date-picker";
import { Calendar } from "react-native-calendars";
import { Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Data } from "../context/Data";

export default function LeaveRequest() {
  const {reasonstr,setReasonStr}=useContext(Data)
  const [selectedDate, setSelectedDate] = useState(null);
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const [pending,setPending]=useState(false);
  const [approved,setApproved]=useState(true);
  const [reject,setReject]=useState(false);
  const [status,setStatus]=useState(false);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const request = () => {
    if (reason != "") {
      console.log("reason");
      console.log(reason);
      console.log("Date Of Leave");
      console.log(selectedDate);
      notify(reasonstr);
      setReason("");
      setError("");
    } else {
      setError("Enter the Reason For Leave");
      console.log("no reason");
    }
  };

  const notify = (reason) => {
    Alert.alert(
      "Leave Request",
      `Your Leave Requst is Sent. Reason: ${reason} `,
      [{ text: "OK", onPress: () => {
        console.log("OK Pressed")
        setStatus(true);
      } }]
    );
  };

  const req = (value) => {
    setReason(value);
    setReasonStr(value);
    setError("");
  };

  const markedDates = {};
  if (selectedDate) {
    markedDates[selectedDate] = { selected: true, selectedColor: "#68B0EE" };
  }

  return (
    <>
      <StatusBar style="dark" />
      <ScrollView>
        <SafeAreaView style={tailwind.style("h-full mt-5 pt-5")}>
          <Text style={tailwind.style("text-2xl mx-2 underline")}>
            Leave Request
          </Text>
          <TextInput
            style={tailwind.style("border mx-4 mt-5 text-xl rounded-lg px-2")}
            placeholder="Type Reason"
            multiline={true}
            value={reason}
            onChangeText={req}
          />
          {error && (
            <Text style={tailwind.style("text-red-500 text-center")}>
              {error}
            </Text>
          )}

          <Calendar
            style={tailwind.style(
              "bg-[#68B0EE] h-[380px] mx-4 mt-5 border rounded-lg"
            )}
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
          {selectedDate ? (
            <Pressable
              onPress={request}
              style={tailwind.style(
                "bg-[#1DA1F2] w-1/2 p-2 rounded mt-5 mx-auto"
              )}
              android_ripple={{ color: "#F8CAD4" }}
            >
              <Text
                style={tailwind.style(
                  "text-center text-white font-extrabold text-lg"
                )}
              >
                Request Leave
              </Text>
            </Pressable>
          ) : (
            <View style={tailwind.style("bg-[#1DA1F2] rounded mx-4 mt-5 p-4")}>
              <Text
                style={tailwind.style(
                  "text-sm text-white font-semibold text-center"
                )}
              >
                please Select the date of record
              </Text>
            </View>
          )}
          <Text style={tailwind.style("text-2xl mx-2 mt-3 underline")}>
            Status
          </Text>
          {status && <ScrollView>
            <View style={tailwind.style("flex-row justify-around mt-3")}>
              <View style={tailwind.style("flex-row mt-3")}>
                <Text>{selectedDate}</Text>
              </View>
              <View style={tailwind.style("flex-row mt-3")}>
                <Text>:</Text>
              </View>
              {pending?<View style={tailwind.style("flex-row mt-3")}>
                <Text style={tailwind.style("my-auto")}>Pending</Text>
                <Ionicons
                  style={tailwind.style("my-auto ml-1")}
                  name="time-outline"
                  size={15}
                  color="black"
                />
              </View>:approved ?
              <View style={tailwind.style("flex-row mt-3")}>
                <Text style={tailwind.style("my-auto")}>Accepted</Text>
                <FontAwesome
                  style={tailwind.style("my-auto ml-1")}
                  name="check-circle-o"
                  size={15}
                  color="green"
                />
              </View>:
              <View style={tailwind.style("flex-row mt-3")}>
                <Text style={tailwind.style("my-auto")}>Rejected</Text>
                <FontAwesome6
                  style={tailwind.style("my-auto ml-1")}
                  name="xmark-circle"
                  size={15}
                  color="red"
                />
              </View>}
            </View>
          </ScrollView>}
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
