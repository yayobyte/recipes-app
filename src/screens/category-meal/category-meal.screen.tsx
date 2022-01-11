import {Button, Text, View} from "react-native";
import {styles} from "../categories/categories.screen.styles";
import {NAV_MEAL_DETAIL} from "../../navigation/screen-names";

export const CategoryMealScreen = ({ navigation }: any) => {
    const goToMealsHandler = () => { navigation.navigate({ routeName: NAV_MEAL_DETAIL }) };
    const goBackHandler = () => { navigation.goBack() };

    return (
        <View style={styles.container}>
            <Text>Categories Screen!</Text>
            <Button title={'Go to details'} onPress={goToMealsHandler} />
            <Button title={'Go back'} onPress={goBackHandler} />
        </View>
    )
}
