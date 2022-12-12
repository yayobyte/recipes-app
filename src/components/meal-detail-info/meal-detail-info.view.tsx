import {styles} from "./meal-detail-info.styles";
import {Text, TextStyle, View, ViewStyle} from "react-native";

type MealDetailInfoProps = {
    duration: number
    complexity: string
    affordability: string
    style?: ViewStyle
    textStyle?: TextStyle
}

export const MealDetailInfo = ({ duration, complexity, affordability, style, textStyle }: MealDetailInfoProps) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
        </View>
    )
}
