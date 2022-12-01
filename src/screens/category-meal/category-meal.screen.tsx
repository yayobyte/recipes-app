import {Button, Text, View} from "react-native";
import {styles} from "../categories/categories.screen.styles";
import {CATEGORIES} from "../../data/dummy-data";

interface CategoryMealScreenProps {
    categoryId: string
    goToMealsHandler: () => void
    goBackHandler: () => void
}

export const CategoryMealScreen = ({ categoryId, goToMealsHandler, goBackHandler }: CategoryMealScreenProps) => {
    const selectedCategory = CATEGORIES.find(({ id }) => id === categoryId);

    return (
        <View style={styles.container}>
            <Text>{selectedCategory?.title}</Text>
            <Button title={'Go to details'} onPress={goToMealsHandler} />
            <Button title={'Go back'} onPress={goBackHandler} />
        </View>
    )
}
