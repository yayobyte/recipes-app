import {styles} from "./subtitle.styles";
import {Text, View} from "react-native";
import React from "react";

type SubtitleProps = {
    text: string
}

export const Subtitle = ({text}: SubtitleProps) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{text}</Text>
        </View>
    )
}
