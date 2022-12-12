import {styles} from "./List.styles";
import {Text, View, ViewStyle} from "react-native";
import React from "react";

type ListProps = {
    list: Array<string>
    style?: ViewStyle
}

export const List = ({ list, style }: ListProps) => {
    return (
        <View style={[styles.container, style]}>
            {list.map((item, index) => (
                <View style={styles.item} key={`list_${index}_${item}`}>
                    <Text>{item}</Text>
                </View>
            ))}
        </View>
    )
}
