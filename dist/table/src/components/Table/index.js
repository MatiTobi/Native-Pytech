import { useObservable } from '@legendapp/state/react';
import React, { memo, useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';
import Animated, { Easing, FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';
import colors from '../../constants';
import { useEffectWithoutFirstRender } from '../../../../constants/hooks';
import { useApp } from '../../../../providers/app';
import { BordersProvider, StoreProvider, TableProvider } from '../../context/table';
import OptionWrapper from '../OptionWrapper';
import Detail from '../Detail';
import { isLowTier } from '../../../../constants/constants';
const Table = memo(({ children, title, renderDetail, colorThemeType = 'default', type = 'default', style, contentContainerStyle, allBorders = false, keys, }) => {
    // ------------- Variables -------------
    const { colorScheme } = useApp();
    const Theme = colors.theme[colorScheme];
    const store = useObservable({
        pressed_id: null,
        deleted: {
            setted: false,
            id: null,
            keys: keys,
            lastId: (() => {
                const newKeys = store.deleted.keys.get();
                return (newKeys?.[newKeys.length - 1] ?? null);
            }),
            firstId: (() => {
                const newKeys = store.deleted.keys.get();
                return (newKeys?.[0] ?? null);
            }),
        },
        borders: new Map()
    });
    const layoutAnimation = isLowTier ? LinearTransition.duration(500) : LinearTransition.easing(Easing.bezier(0.2, 0.2, 0, 1)).duration(600);
    // ------------- useEffect -------------
    useEffectWithoutFirstRender(() => store.deleted.keys.set(keys), [keys]);
    const value = useMemo(() => ({ colorThemeType, type, keys, allBorders }), [colorThemeType, type, keys, allBorders]);
    return (<Animated.View key={title || 'title'} layout={Platform.OS === 'web' ? undefined : LinearTransition.duration(100).easing(Easing.bezier(0.1, 0.1, 0, 1))} style={[
            styles.container,
            type === 'default' ? { marginRight: 16, marginLeft: 16, marginBottom: renderDetail ? 20 : 30 } : {},
            style
        ]}>
            {title &&
            <Animated.Text key={title} style={[styles.title, { color: Theme.text2 }]} exiting={FadeOut.duration(100)} entering={FadeIn.duration(100)}>
                    {title}
                </Animated.Text>}

            <Animated.View exiting={FadeOut.duration(100)} entering={FadeIn.duration(100)} layout={layoutAnimation} style={[
            styles.contentContainer,
            { backgroundColor: colors.table[colorThemeType][colorScheme].background },
            contentContainerStyle,
            type === 'default' ? { borderRadius: 26 } : {},
        ]}>
                <TableProvider value={value}>
                    <StoreProvider value={store}>
                        <BordersProvider value={store.borders}>
                            {children}
                        </BordersProvider>
                    </StoreProvider>
                </TableProvider>
            </Animated.View>


            {renderDetail &&
            <Animated.View entering={FadeIn.duration(100)} exiting={FadeOut.duration(100)}>
                    {renderDetail()}
                </Animated.View>}
        </Animated.View>);
});
const styles = StyleSheet.create({
    container: {
        gap: 6,
    },
    title: {
        marginLeft: 16,
        fontSize: 17,
        fontWeight: '600',
    },
    contentContainer: {
        overflow: 'hidden',
        position: 'relative',
    },
    viewDetail: {
        marginTop: 1.5,
        marginLeft: 15,
        marginRight: 16
    }
});
Table.Detail = Detail;
Table.Option = OptionWrapper;
export default Table;
