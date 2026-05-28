import { memo } from 'react';
import { colors } from 'native-pytech/components/gradient';
import { Pressable, StyleSheet } from 'react-native';

import Gradient from 'native-pytech/components/gradient';

import type Props from './types';



export default memo(({
	color,
	size,
	selectedColor,
	onSelectColor,

}: Props) => {

	const isSelected = color === selectedColor

	return (
		<Pressable
			onPress={() => onSelectColor?.(color)}
			style={[
				styles.container,
				{
					borderColor: isSelected ? colors[color].light : 'transparent',
				}
			]}
		>
			<Gradient
				color={color}
				type='extraLarge'
			/>
		</Pressable>
	)
})


const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderRadius: '100%',
		padding: 4,
	},
})