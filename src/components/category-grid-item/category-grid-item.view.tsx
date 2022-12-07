import {Pressable, Text, View} from "react-native";
import {styles} from "./category-grid-item.styles";
import {CategoryAttributes} from "../../models/category";

type CategoryGridItemProps = {
    item: CategoryAttributes
    onPress: () => void
}

export const CategoryGridItem = ({ item: { title, color }, onPress }: CategoryGridItemProps) => (
    <View style={styles.container}>
        <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} android_ripple={{ color: '#CCC'}} >
            <View style={[styles.innerContainer,  { backgroundColor: color }]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
)
