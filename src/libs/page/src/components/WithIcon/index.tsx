import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useApp } from "@/libs/providers/App"
import colors from '../../constants'
import PageWrapper from '../PageWrapper'
import Props, { Component } from './types'
import Subtitle from '../Subtitle'



const WithIcon = memo(({
    children,
    renderIcon,
    style,
    title,
    subtitle,
    renderSubtitle

}: Props) => {

    const { colorScheme } = useApp()
    const Theme = colors[colorScheme]

    return (
        <PageWrapper style={style}>
            {renderIcon &&
                <View style={styles.viewIcon}>
                    {renderIcon()}
                </View>
            }
            {(title || renderSubtitle) && (
                <View style={styles.viewTitle}>
                    {title && <Text style={[styles.title, {color: Theme.text}]}>{title}</Text>}
                    {subtitle && <Text style={[styles.subtitle, {color: Theme.text2}]}>{subtitle}</Text>}
                    {renderSubtitle?.()}
                </View>)
            }
            {children}
        </PageWrapper>
    )
}) as Component;

WithIcon.Subtitle = Subtitle

export default WithIcon

const styles = StyleSheet.create({
    viewIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 83,
        marginTop: 22,
        marginBottom: 39.5,
    },
    viewTitle: {
        gap: 1,
        marginHorizontal: 38,
        marginBottom: 30,
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
    },
    subtitle: {
        fontSize: 22,
    }
})
