import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import tw from "twrnc";

const OldRecord = (props) => {
  return (
    <>
      {/* OldRecord View container */}
      {/* OldRecord View container */}
      <View style={tw.style("bg-[#1DA1F2] border  rounded-lg")}>
        {/* Date View container */}
        <View style={tw.style("text-white px-4 pt-2 flex-row justify-between")}>
          {/* Date text */}
          <Text
            style={tw.style(
              "font-extrabold text-2xl text-white border-b-2 border-white w-1/2 text-center"
            )}
          >
            {props.date}
          </Text>
        </View>

        {/* Time information container */}
        <View style={tw.style("w-full px-4 flex-row mt-3 justify-between")}>
          {/* Entered time */}
          <Text
            style={tw.style(
              "text-white  font-bold text-sm border-r-2 border-white pr-1"
            )}
          >
            Entered Time : 9:36am{" "}
          </Text>

          {/* End time */}
          <Text style={tw.style("text-white  font-bold text-sm pl-1")}>
            End Time : 6:00pm
          </Text>
        </View>

        {/* Total hours container */}
        <View style={tw.style("w-full px-4 flex-row my-3")}>
          {/* Total hours label */}
          <Text style={tw.style("text-white  font-bold text-xl")}>
            Total Hours :{" "}
          </Text>

          {/* Total hours value */}
          <Text style={tw.style("text-white  font-semibold text-sm my-auto")}>
            {" "}
            8 hours 24 minutes
          </Text>
        </View>
      </View>
    </>
  );
};

export default OldRecord;
