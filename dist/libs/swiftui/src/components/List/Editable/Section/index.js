import { List, Section } from "@expo/ui/swift-ui";
import { moveDisabled, tag, deleteDisabled } from "@expo/ui/swift-ui/modifiers";
import React, { memo, useCallback, useState } from "react";
import Hooks from '@/libs/constants/hooks';
import { useListEditable } from "../../../../context/ListEditable";
function Component({ data = [], keyExtractor, onDelete, onMove, renderItem, sectionProps, }) {
    // ---------------------- Variables ----------------------
    const { enableMove, enableDelete } = useListEditable();
    const [_data, setData] = useState(data ?? []);
    Hooks.useEffectWithoutFirstRender(() => setData(data ?? []), [data]);
    // ---------------------- Functions ----------------------
    const handleDelete = useCallback((indices) => {
        setData(prev => prev.filter((_, i) => !indices.includes(i)));
        for (const index of indices)
            onDelete?.({ index });
    }, [onDelete]);
    const handleMove = useCallback((sourceIndices, destination) => {
        const adjustedDest = sourceIndices[0] < destination ? destination - 1 : destination;
        setData(prev => {
            const newData = [...prev];
            const [removed] = newData.splice(sourceIndices[0], 1);
            newData.splice(adjustedDest, 0, removed);
            return newData;
        });
        onMove?.({ listIndexes: sourceIndices, destinationIndex: adjustedDest });
    }, [onMove]);
    return (<Section {...sectionProps}>
            <List.ForEach onDelete={handleDelete} onMove={handleMove} modifiers={[moveDisabled(!enableMove), deleteDisabled(!enableDelete)]}>
                {_data.map((item, index) => {
            const key = keyExtractor?.(item) ?? index;
            return renderItem?.({ item, tagModifier: tag(key) });
        })}
            </List.ForEach>
        </Section>);
}
export default memo(Component);
