import React, { memo } from "react";
import { Ionicons } from '@expo/vector-icons';
import { useApp } from "../../../../../libs/providers/App";
import Table from "../../../../../libs/table";
import Colors from "../../../../../libs/constants/colors";
import { usePage } from '../../context/page';
export default memo(({ itemKey, title, ionIconName, icon }) => {
    const { colorScheme } = useApp();
    const { selected, onSelectionChange } = usePage();
    return (<Table.Option id={itemKey} onPress={() => onSelectionChange?.(itemKey)} colorScheme={colorScheme} childrenLeft={<>
                {icon ?? (ionIconName && <Ionicons name={ionIconName} size={24} color={Colors.especiales.azul}/>)}
                {title && (<Table.Option.Components.TextView>
                        <Table.Option.Components.Text text={title}/>
                    </Table.Option.Components.TextView>)}
            </>} childrenRight={itemKey !== selected ? undefined : (<Ionicons name='checkmark-circle' size={24} color={Colors.especiales.azul}/>)}/>);
});
