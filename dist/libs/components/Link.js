import { Pressable, View, Text, StyleSheet } from 'react-native';
import { memo } from 'react';
import { useRouter } from 'expo-router';
export default memo(({ text = 'Inicia sesión', onPress, renderItems = ({ pressed }) => null, style }) => {
    const router = useRouter();
    return (<Pressable onPress={() => onPress({ router })}>
            {({ pressed }) => (<View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <Text style={[styles.text, style, pressed && { textDecorationLine: 'underline' }]}>
                        {text}
                    </Text>
                    {renderItems({ pressed })}
                </View>)}
        </Pressable>);
});
const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: 'hsl(207, 100%, 50%)',
    },
});
