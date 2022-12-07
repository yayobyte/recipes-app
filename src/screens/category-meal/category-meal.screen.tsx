import {Button, FlatList, Text, View} from "react-native";
import {styles} from "../categories/categories.screen.styles";
import {CATEGORIES, MEALS} from "../../data/dummy-data";
import {RouteProp, useRoute} from "@react-navigation/native";
import {Meal} from "../../models/meal";

interface CategoryMealScreenProps {
    categoryId: string
    goToMealsHandler: () => void
    goBackHandler: () => void
}

export const CategoryMealScreen = ({ goToMealsHandler, goBackHandler }: CategoryMealScreenProps) => {
    const { params: { categoryId }} = useRoute<RouteProp<{ params: Readonly<{ categoryId: string }> }>>()
    const selectedCategory = CATEGORIES.find(({ id }) => id === categoryId);
    const meals = MEALS.filter(({ categoryIds }) => categoryIds.includes(selectedCategory?.id || ''))

    const renderMealItem = ( renderItem: { item: Meal}) => (
        <View>
            <Text>{renderItem.item.title}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList data={meals} renderItem={renderMealItem} />
            <View>
                <Button title={'Go to details'} onPress={goToMealsHandler} />
                <Button title={'Go back'} onPress={goBackHandler} />
            </View>
        </View>
    )
}
