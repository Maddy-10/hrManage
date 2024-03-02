import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OldRecord from "../components/OldRecord";
import { useRoute } from "@react-navigation/native";
import tw from "twrnc";

export default function OldRecordDetails() {
  const route = useRoute();
  const { params } = route;
  // const { dateOfRecord } = props; // Extracting the dateOfRecord prop
  return (
    <>
      <View style={tw.style("bg-white h-full")}>
        <Text style={tw.style("pt-40 pl-4 text-2xl underline")}>
          Old Record Details
        </Text>
        <Text style={tw.style("pt-10 pl-3")}>
          <OldRecord date={params.selectedDate} />{" "}
          {/* Passing the extracted prop value to OldRecord */}
        </Text>
      </View>
    </>
  );
}
