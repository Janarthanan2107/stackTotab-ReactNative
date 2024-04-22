import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function HomeScreen() {
    return (
        <View className="flex justify-center items-center h-full">
            <StatusBar style='dark' />
            <Text>HomeScreen</Text>
        </View>
    )
}