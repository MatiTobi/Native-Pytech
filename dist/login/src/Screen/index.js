import { useApp } from "providers/app";
import { memo } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import colors from '../constants';
import { Gradient, Input, SvgLogoPytech, SvgPytech } from './components';
import Container from './Container';
const LogIn = memo(({ title, subtitle, iconPage, bottomElements, }) => {
    const { height } = useWindowDimensions();
    const { colorScheme } = useApp();
    const Theme = colors.theme[colorScheme];
    return (<Container>
            {iconPage &&
            <View style={{ marginTop: height * 0.18 }}>
                    {iconPage}
                </View>}

            <View style={styles.viewText}>
                <Text style={[styles.title, { color: Theme.text }]}>{title}</Text>
                {subtitle && <Text style={[styles.subtitle, { color: Theme.text2 }]}>{subtitle}</Text>}
            </View>
            
            {bottomElements &&
            <View style={styles.viewBottom}>
                    {bottomElements}
                </View>}
            
        </Container>);
});
LogIn.Input = Input;
LogIn.Gradient = Gradient;
LogIn.SvgPytech = SvgPytech;
LogIn.SvgLogoPytech = SvgLogoPytech;
export default LogIn;
const styles = StyleSheet.create({
    viewText: {
        marginTop: 32,
        gap: 16,
        width: '70%',
        maxWidth: 400
    },
    title: {
        margin: 'auto',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
    },
    subtitle: {
        margin: 'auto',
        textAlign: 'center',
        fontSize: 17,
    },
    viewBottom: {
        width: '80%',
        maxWidth: 460,
        display: 'flex',
        marginTop: 32,
        gap: 10
    }
});
