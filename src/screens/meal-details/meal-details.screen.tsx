import {Button, Text, View} from "react-native";
import {styles} from "../categories/categories.screen.styles";

export const MealDetailsScreen = ({ navigation }: any) => {

    const goBackHandler = () => { navigation.popToTop() };
    return (
        <View style={styles.container}>
            <Text>Categories Screen!</Text>
            <Button title={'Go To Start'} onPress={goBackHandler} />
        </View>
    )
}
