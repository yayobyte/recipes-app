import {Pressable, Text, View} from "react-native";
import {styles} from "./category-grid-item.styles";
import {CategoryAttributes} from "../../models/category";

type CategoryGridItemProps = {
    item: CategoryAttributes
    onPress: () => void
}

export const CategoryGridItem = ({ item: { id, color, title }, onPress }: CategoryGridItemProps) => (
    <Pressable onPress={onPress}>
        <View style={styles.gridItem}>
            <Text>
                {title}
            </Text>
        </View>
    </Pressable>
)
