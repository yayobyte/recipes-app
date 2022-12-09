import {Button, FlatList, Pressable, Text, View, Image} from "react-native";
import {styles} from "./category-meal.styles";
import {CATEGORIES, MEALS} from "../../data/dummy-data";
import {RouteProp, useRoute} from "@react-navigation/native";
import {Meal} from "../../models/meal";
import {Colors} from "../../constants/colors";

interface CategoryMealScreenProps {
    categoryId: string
    goToMealsHandler: (id: string) => void
    goBackHandler: () => void
}

export const CategoryMealScreen = ({goToMealsHandler, goBackHandler}: CategoryMealScreenProps) => {
    const {params: {categoryId}} = useRoute<RouteProp<{ params: Readonly<{ categoryId: string }> }>>()
    const selectedCategory = CATEGORIES.find(({id}) => id === categoryId);
    const meals = MEALS.filter(({categoryIds}) => categoryIds.includes(selectedCategory?.id || ''))

    const renderMealItem = (renderItem: { item: Meal }) => (
        <View style={styles.mealItem}>
            <Pressable
                style={({pressed}) => [styles.innerContainer, pressed ? styles.buttonPressed : null]}
                android_ripple={{color: Colors.gray }}
                onPress={() => goToMealsHandler(renderItem.item.id)}
            >
                <Image source={{uri: renderItem.item.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{renderItem.item.title}</Text>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{renderItem.item.duration}</Text>
                    <Text style={styles.detailItem}>{renderItem.item.complexity}</Text>
                    <Text style={styles.detailItem}>{renderItem.item.affordability}</Text>
                </View>
            </Pressable>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList data={meals} renderItem={renderMealItem}/>
            <View>
                <Button title={'Go back'} onPress={goBackHandler}/>
            </View>
        </View>
    )
}
