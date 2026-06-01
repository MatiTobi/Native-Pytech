import { memo, useMemo, useState, useRef } from "react";
import { Stack, useRouter } from "expo-router";
import { useColorScheme, useWindowDimensions, View, StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import Utils from "../../../libs/constants/utils";
import LoginSvg from '../../assets/images/login_letras.svg';
import LoginSvgDark from '../../assets/images/login_letras_dark.svg';
import Hooks from '../../../libs/constants/hooks';
import colors from "../constants";
const [Provider, useApp] = Utils.createCtx();
export { useApp };
export default memo(({ listStackNames = [], getBackgroundColor, getSession, renderItemLoading = ({ colorScheme }) => (colorScheme === 'dark' ?
    <LoginSvgDark width={200} height={200}/>
    :
        <LoginSvg width={200} height={200}/>), onLoadingRealsed, }) => {
    // -------------- Variables --------------
    const colorScheme = useColorScheme();
    const Theme = colors[colorScheme];
    const { fontScale } = useWindowDimensions();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const hasSessionRef = useRef(false);
    // -------------- Effects --------------
    Hooks.useEffectWithoutFirstRender(() => {
        if (!isLoading)
            onLoadingRealsed?.({ router, hasSession: hasSessionRef.current });
    }, [isLoading]);
    Hooks.useAsyncEffect(async (isMounted) => {
        hasSessionRef.current = (await getSession?.()) ?? true;
        if (!isMounted)
            return;
        setIsLoading(false);
    }, []);
    // -------------- Return --------------
    const value = useMemo(() => ({ colorScheme: colorScheme, fontScale: fontScale }), [colorScheme, fontScale]);
    if (isLoading) {
        return (<View style={[styles.container, { backgroundColor: getBackgroundColor?.({ colorScheme }) || Theme.backgroundColor }]}>
                {renderItemLoading({ colorScheme })}
            </View>);
    }
    return (<SafeAreaProvider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Provider value={value}>
                    <Stack screenOptions={{ headerShown: false }}>
                        {listStackNames?.map((name) => (<Stack.Screen key={name} name={name}/>))}
                    </Stack>
                </Provider>
            </ThemeProvider>
        </SafeAreaProvider>);
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
