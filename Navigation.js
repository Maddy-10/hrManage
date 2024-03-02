import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import QRScanner from "./screens/QRSacnner";
import Dashboard from "./screens/Dashboard";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import LeaveRequest from "./screens/LeaveRequest";
import Profile from "./screens/Profile";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OldRecord from "./components/OldRecord";
import OldRecordDetails from "./pages/OldRecordDetails";
import Index from "./screens/Index";
import Login from "./screens/Login";
import { useContext } from "react";
import { LoginState } from "./context/LoginState";

// Stack
const HomeStack = createNativeStackNavigator();



function HomeStackGroup(){
  return(
    <HomeStack.Navigator screenOptions={{
      headerShown:false,
    }}>
      
      {/* <HomeStack.Screen name="Login" component={Login}/> */}
      <HomeStack.Screen name="Dashboard" component={Dashboard}/>
      <HomeStack.Screen name="OldRecord" component={OldRecord}/>
      <HomeStack.Screen name="OldRecordDetails" component={OldRecordDetails}/>
    </HomeStack.Navigator>
  )
}


const Tab = createBottomTabNavigator();
function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName, iconColor;
          if (route.name === "HomeStackGroup") {
            iconName = focused ? "home" : "home-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Scan QR") {
            iconColor = focused ? color : "#BEBEBE";
            return (
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={size}
                color={iconColor}
              />
            );
          } else if (route.name === "Leave Request") {
            iconColor = focused ? color : "#BEBEBE";
            return (
              <FontAwesome6 name="user-clock" size={size} color={iconColor} />
            );
          } else if (route.name === "Profile") {
            iconColor = focused ? color : "#BEBEBE";
            return (
              <FontAwesome name="user-circle" size={size} color={iconColor} />
            );
          }
        },
        headerShown: false,
        tabBarActiveTintColor:"#1DA1F2",
        tabBarInactiveTintColor:"#BEBEBE",
        tabBarVisible: false,
      })}
    >
      <Tab.Screen name="HomeStackGroup" component={HomeStackGroup} options={{tabBarLabel:"DashBoard"}}/>
      <Tab.Screen name="Scan QR" component={QRScanner} />
      <Tab.Screen name="Leave Request" component={LeaveRequest} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}



export default function Navigation() {
  const {loginState,logoutState,login,logout,setLoginState,setLogoutState}=useContext(LoginState)
  return (
    <>
    {loginState?<Login/>:
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>}
    </>
  );
}
