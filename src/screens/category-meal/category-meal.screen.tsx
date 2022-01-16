import {Button, Text, View} from "react-native";
import {styles} from "../categories/categories.screen.styles";
import {NAV_MEAL_DETAIL} from "../../navigation/screen-names";
import {NavigationStackScreenProps} from "react-navigation-stack";
import {CATEGORIES} from "../../data/dummy-data";

interface CategoryMealScreenProps extends NavigationStackScreenProps { }

export const CategoryMealScreen = ({ navigation }: CategoryMealScreenProps) => {
    const categoryId: string = navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(({ id }) => id === categoryId);

    const goToMealsHandler = () => { navigation.navigate({ routeName: NAV_MEAL_DETAIL }) };
    const goBackHandler = () => { navigation.goBack() };

    return (
        <View style={styles.container}>
            <Text>{selectedCategory?.title}</Text>
            <Button title={'Go to details'} onPress={goToMealsHandler} />
            <Button title={'Go back'} onPress={goBackHandler} />
        </View>
    )
}
