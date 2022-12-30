import {View, Text} from "react-native";
import {styles} from "./favorites.styles";
import {MealsList, MealsListProps} from "../../components/meals-list/meals-list";
import {useContext} from "react";
import {FavoritesContext} from "../../store/context/favorites.context";
import {MEALS} from "../../data/dummy-data";

type FavoritesScreenProps = {
    goToMealsHandler: MealsListProps['onPress']
}

export const FavoritesScreen = ({ goToMealsHandler }: FavoritesScreenProps) => {
    const { ids } = useContext(FavoritesContext)

    const mealsList = MEALS.filter(({ id }) => ids.includes(id))

    if (ids.length === 0) {
        return (
            <View>
                <Text style={styles.header}>There are no favorites added yet</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <MealsList mealsList={mealsList} onPress={goToMealsHandler} />
        </View>
    )
}
