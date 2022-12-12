import {styles} from "./meal-detail-info.styles";
import {Text, View} from "react-native";

type MealDetailInfoProps = {
    duration: number
    complexity: string
    affordability: string
}

export const MealDetailInfo = ({ duration, complexity, affordability }: MealDetailInfoProps) => {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity}</Text>
            <Text style={styles.detailItem}>{affordability}</Text>
        </View>
    )
}
