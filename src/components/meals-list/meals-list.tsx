import {Meal} from "../../models/meal";
import {FlatList, Image, Pressable, Text, View} from "react-native";
import {styles} from "./meals-list.styles";
import {Colors} from "../../constants/colors";
import {MealDetailInfo} from "../meal-detail-info";

export type MealsListProps = {
    mealsList: Meal[]
    onPress: (itemId: string) => void
}

export const MealsList = ({ mealsList, onPress }: MealsListProps) => {
    const renderMealItem = (renderItem: { item: Meal }) => (
        <View style={styles.mealItem}>
            <Pressable
                style={({pressed}) => [styles.innerContainer, pressed ? styles.buttonPressed : null]}
                android_ripple={{color: Colors.gray }}
                onPress={() => onPress(renderItem.item.id)}
            >
                <Image source={{uri: renderItem.item.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{renderItem.item.title}</Text>
                <MealDetailInfo
                    duration={renderItem.item.duration}
                    complexity={renderItem.item.complexity}
                    affordability={renderItem.item.affordability}
                />
            </Pressable>
        </View>
    )

    return (
        <FlatList data={mealsList} renderItem={renderMealItem}/>
    )
}
