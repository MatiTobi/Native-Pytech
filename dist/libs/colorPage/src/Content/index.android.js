import React, { memo } from 'react';
import { Shape, Surface, Box, Host, Column, Row } from '@expo/ui/jetpack-compose';
import { background, clip, Shapes, clickable, paddingAll, alpha, size as sizeModifier, fillMaxWidth } from '@expo/ui/jetpack-compose/modifiers';
import { colors } from '../../../../libs/components/Gradient';
export default memo(({ colorRows, renderGradient, ...pageProps }) => {
    return (<Host style={{ flex: 1 }}>
			<Column verticalArrangement={{ spacedBy: 2 }}>
				{colorRows.map((row, index) => (<Row key={index} horizontalArrangement="spaceEvenly" verticalArrangement="center" modifiers={[fillMaxWidth()]}>
						{row.map((color, indexColor) => renderGradient == null ? null : (<ItemRenderer key={color} color={color} size={55} renderGradient={renderGradient} {...pageProps}/>))}
					</Row>))}
			</Column>
		</Host>);
});
const ItemRenderer = memo(({ color, size, selectedColor, onSelectColor, renderGradient, }) => {
    if (!renderGradient)
        return null;
    const isSelected = color === selectedColor;
    const innerBorderWidth = 2;
    const outerBorderWidth = 3;
    return (<Surface color='#00000000' shape={Shape.RoundedCorner({
            cornerRadii: {
                topStart: size,
                topEnd: size,
                bottomStart: size,
                bottomEnd: size,
            },
        })} border={{ width: outerBorderWidth, color: isSelected ? colors[color].middle : '#00000000' }} modifiers={[clip(Shapes.Circle)]}>
            <Box contentAlignment="center" modifiers={[
            background('#00000000'),
            paddingAll(outerBorderWidth * 2),
            clip(Shapes.Circle),
            clickable(() => onSelectColor?.(color))
        ]}>

                <Box contentAlignment="center" modifiers={[sizeModifier(size, size)]}>

                    {!isSelected &&
            <Box contentAlignment="center" modifiers={[sizeModifier(size, size)]}>
                            {React.createElement(renderGradient, { color, size })}
                            <Box modifiers={[sizeModifier(size, size), alpha(0.25), background('#FFFFFF')]}/>
                        </Box>}

					{React.createElement(renderGradient, { color, size: size - (!isSelected ? innerBorderWidth * 2 : 0) })}

                </Box>

            </Box>
        </Surface>);
});
