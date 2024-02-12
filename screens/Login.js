import React from 'react';
import { View, Text, TextInput, Pressable, Platform } from 'react-native';
import tw from 'twrnc';
import useLogin from '../hooks/useLogin';

export default function Login({ navigation }) {
    // Using custom hook to manage login state
    const { input, error, initialError, inputHandler, submitHandler, setError } = useLogin();

    const loginPress = () => {
        const log = submitHandler();
        if (log === true) {
            navigation.navigate("Home");
        }
    };

    return (
        <>
            {/* Login page container */}
            <View style={tw.style('flex-1 justify-center bg-[#1F334B] w-full h-full')}>
                
                {/* Login Title */}
                <Text style={tw.style('text-white text-3xl font-bold mx-auto')}>Login</Text>

                {/* Form container */}
                <View style={tw.style('bg-[#F1C28E] w-3/4 mx-auto mt-10 rounded-lg pt-10 pb-5 justify-center')}>

                    {/* Username input */}
                    <TextInput
                        style={tw.style('bg-[#D9D9D9] w-3/4 mx-auto rounded-xl pl-3')}
                        placeholder='Enter Username'
                        value={input.username}
                        onChangeText={(value) => {
                            inputHandler('username', value);
                            setError(initialError);
                        }}
                    />
                    {error.username && <Text style={tw.style('text-red-500 mt-2 mx-auto')}>{error.username}</Text>}

                    {/* Password input */}
                    <TextInput
                        style={tw.style('bg-[#D9D9D9] w-3/4 mx-auto mt-5 rounded-xl pl-3')}
                        secureTextEntry={true}
                        placeholder='Enter Password'
                        value={input.password}
                        onChangeText={(value) => {
                            inputHandler('password', value);
                            setError(initialError);
                        }}
                    />
                    {error.password && <Text style={tw.style('text-red-500 mt-2 mx-auto')}>{error.password}</Text>}

                    {/* Submit button */}
                    <View style={tw.style('w-1/3 mx-auto mt-10')}>
                        <Pressable
                            style={tw.style('bg-[#322E53] rounded p-1')}
                            onPress={loginPress}
                            android_ripple={{ color: '#325E93' }}
                        >
                            <Text style={tw.style('text-white text-center text-sm font-bold')}>SUBMIT</Text>
                        </Pressable>
                    </View>

                </View>

            </View>
            
        </>
    );
}
