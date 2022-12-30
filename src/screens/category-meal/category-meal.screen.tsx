import {Button, View} from "react-native";
import {styles} from "./category-meal.styles";
import {CATEGORIES, MEALS} from "../../data/dummy-data";
import {RouteProp, useRoute} from "@react-navigation/native";
import {MealsList, MealsListProps} from "../../components/meals-list/meals-list";

interface CategoryMealScreenProps {
    categoryId: string
    goToMealsHandler: MealsListProps['onPress']
    goBackHandler: () => void
}

export const CategoryMealScreen = ({goToMealsHandler, goBackHandler}: CategoryMealScreenProps) => {
    const {params: {categoryId}} = useRoute<RouteProp<{ params: Readonly<{ categoryId: string }> }>>()
    const selectedCategory = CATEGORIES.find(({id}) => id === categoryId);
    const meals = MEALS.filter(({categoryIds}) => categoryIds.includes(selectedCategory?.id || ''))

    return (
        <View style={styles.container}>
            <MealsList mealsList={meals} onPress={goToMealsHandler} />
            <View>
                <Button title={'Go back'} onPress={goBackHandler}/>
            </View>
        </View>
    )
}
