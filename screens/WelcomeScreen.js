import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigate = useNavigation()
    useEffect(() => {
        setTimeout(() => navigate.navigate("Main"), 2500)
    }, [])

    return (
        <View className="flex justify-center items-center h-full bg-amber-500">
            <StatusBar style='light' />
            <Text className="text-white font-semibold text-[100px] flex">
                <Text className="text-red-500">Trend</Text>Spotter
            </Text>
            <Text className="p-5 text-white font-semibold text-[20px]">Men's Fashion</Text>
        </View>
    )
}