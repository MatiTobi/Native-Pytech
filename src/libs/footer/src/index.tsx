import { View, StyleSheet } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import { BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { memo } from 'react'

import Background from './Background'
import Button from './Button'
import Props, { Component } from './types'



const Footer = memo(({children, backgroundColorPage}: Props) => {

    const insets = useSafeAreaInsets()

    return (
        <View style={styles.footer}>
            <MaskedView
                style={[StyleSheet.absoluteFillObject]}
                maskElement={   
                    <LinearGradient
                        colors={['transparent', 'transparent','rgba(0, 0, 0, 0.8)', 'black', 'black']}
                        locations={[0, 0.05, 0.2, 0.5, 1]}
                        style={StyleSheet.absoluteFillObject}
    
                    />
                }
            >
                <BlurView
                    intensity={6}
                    tint='dark'
                    style={StyleSheet.absoluteFillObject}
                />
            </MaskedView>

            {backgroundColorPage && <Background backgroundColorPage={backgroundColorPage} />}

            <View style={[styles.view, {paddingBottom: insets.bottom + 5}]}>
                {children}
            </View>

        </View>
    )
}) as Component

Footer.Button = Button

export default Footer


const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    view: {
        position: 'relative',
        paddingHorizontal: 17 * 2,
        paddingTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    }
})

