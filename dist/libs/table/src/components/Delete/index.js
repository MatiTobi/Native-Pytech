import { batch } from '@legendapp/state';
import { useSelector } from '@legendapp/state/react';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { Animated, Easing, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Reanimated, { Easing as Reasing, SlideOutLeft } from 'react-native-reanimated';
import { useLayoutEffectWithoutFirstRender } from '../../../../../libs/constants/hooks';
import { isLowTier } from '../../../../../libs/constants/consts';
import colors from '../../constants';
import { useStore } from '../../context/table';
import { DeleteProvider } from '../../context/delete';
const anim = {
    duration: 600,
    easing: Easing.bezier(0.2, 0.2, 0, 1),
    useNativeDriver: true,
};
export default memo(({ children, ...props }) => {
    const [deleted, setDeleted] = useState(false);
    if (deleted)
        return null;
    return <Component {...props} setDeleted={setDeleted}>{children}</Component>;
});
const Component = memo(({ children, id, removeWidth, onDelete, onDeleteShown, setDeleted, }) => {
    const store = useStore();
    const is_deleted = useSelector(() => store.deleted.id.get() === id);
    useLayoutEffectWithoutFirstRender(() => {
        if (is_deleted)
            return;
        onDeleteShown?.(id, false);
        removeStateValue.stopAnimation();
        Animated.timing(removeStateValue, { toValue: 0, ...anim }).start();
    }, [is_deleted]);
    const removeStateValue = useRef(new Animated.Value(0)).current;
    const [widthRemove, setWidthRemove] = useState(removeWidth ? removeWidth + (12 * 2) : 0);
    const animatedRemoveStyle = {
        opacity: removeStateValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        }),
        transform: [
            {
                translateX: removeStateValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-widthRemove, 0]
                })
            },
            {
                scale: removeStateValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1]
                }),
            }
        ]
    };
    const animatedStyle = {
        transform: [{
                translateX: removeStateValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -widthRemove]
                })
            }]
    };
    const onLayputProps = removeWidth ? {} : { onLayout: (e) => setWidthRemove(e.nativeEvent.layout.width) };
    const styleWidthRemove = removeWidth ? { width: removeWidth } : {};
    // Función que los children pueden llamar para iniciar el delete
    const startDelete = useCallback(() => {
        if (store.deleted.setted.peek())
            return;
        store.deleted.id.set(id);
        removeStateValue.stopAnimation();
        Animated.timing(removeStateValue, { toValue: 1, ...anim }).start();
        onDeleteShown?.(id, true);
    }, []);
    const exitingAnimation = isLowTier ? SlideOutLeft.duration(200) : SlideOutLeft.easing(Reasing.bezier(0.2, 0.2, 0, 1)).duration(300);
    // Valor del contexto
    const contextValue = useMemo(() => startDelete, [startDelete]);
    const start = useCallback(() => {
        if (store.deleted.id.peek() === null)
            return;
        store.deleted.setted.set(true);
        store.deleted.id.set(null);
    }, []);
    const end = useCallback(() => { store.deleted.setted.set(false); }, []);
    const viewProps = useMemo(() => (Platform.OS === 'web' ?
        {
            onPointerDown: start,
            onPointerUp: end,
        } : {
        onTouchStart: start,
        onTouchEnd: end,
    }), []);
    return (<>
        <Pressable style={[styles.pressableRemove]} {...onLayputProps} onPress={() => {
            removeStateValue.stopAnimation();
            setDeleted(true);
            onDelete?.(id);
            const oldKeys = store.deleted.keys.peek();
            const newKeys = oldKeys?.filter((key) => key !== id);
            batch(() => {
                store.deleted.keys.set(newKeys);
                store.deleted.id.set(null);
            });
        }}>
            <Animated.View style={[animatedRemoveStyle, styles.containerRemove, styleWidthRemove]}>
                <Text style={styles.text}>Eliminar</Text>
            </Animated.View>
        </Pressable>

        <Animated.View style={[{ position: 'relative' }, animatedStyle]}>
            <Reanimated.View exiting={exitingAnimation}>
                <View {...viewProps}>
                    <DeleteProvider value={contextValue}>
                        {children}
                    </DeleteProvider>
                </View>
            </Reanimated.View>
        </Animated.View>
    </>);
}, (prev, next) => prev.id === next.id);
const styles = StyleSheet.create({
    pressableRemove: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1
    },
    containerRemove: {
        paddingHorizontal: 12,
        backgroundColor: colors.especiales.rojo,
        margin: 6,
        marginHorizontal: 10,
        flex: 1,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 13,
        color: 'white'
    }
});
