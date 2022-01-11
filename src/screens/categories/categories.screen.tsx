import {Button, Text, View} from "react-native";
import {styles} from './categories.screen.styles'
import {NAV_CATEGORY_MEALS} from "../../navigation/screen-names";

type CategoriesScreenProps = {
    navigation:  any,
}

export const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
    const goToMealsHandler = () => { navigation.navigate({ routeName: NAV_CATEGORY_MEALS }) };

    return (
        <View style={styles.container}>
            <Text>Categories Screen!</Text>
            <Button title={'Go to meals'} onPress={goToMealsHandler} />
        </View>
    )
}
