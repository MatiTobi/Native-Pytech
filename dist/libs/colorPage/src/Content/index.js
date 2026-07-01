import { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Item from '../Item';
export default memo(({ colorRows, ...pageProps }) => {
    return (<View style={styles.container}>
			{colorRows.map((row, index) => (<View key={index} style={styles.row}>
					{row.map((color, indexColor) => (<Item key={indexColor} color={color} size={100} {...pageProps}/>))}
				</View>))}
		</View>);
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});
