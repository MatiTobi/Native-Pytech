import { memo } from "react"
import { Stack } from "expo-router"
import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import Colors from "@/libs/constants/colors"

import Props from "./types"



export default memo(({ saveEnabled, onPressSave }: Props) => {
    return (
        <Stack.Screen
            options={{
                headerRight: () => (
                    <Pressable
                        disabled={!saveEnabled}
                        onPress={onPressSave}
                        style={[styles.pressable, { opacity: saveEnabled ? 1 : 0.5 }]}
                    >
                        <Ionicons name="checkmark" size={24} color={Colors.especiales.azul} />
                    </Pressable>
                )
            }}
        />
    )
})

const styles = StyleSheet.create({
    pressable: {
        padding: 10,
    }
})