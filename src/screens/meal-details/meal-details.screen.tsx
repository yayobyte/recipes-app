import {Button, Text, View, Image, FlatList } from "react-native";
import {MEALS} from "../../data/dummy-data";
import {styles} from './meal-details.styles'
import React from "react";
import {Ingredients, Meal} from "../../models/meal";

type MealDetailsScreenProps = {
    goToHomeHandler: () => void
    mealId: string
}

export const MealDetailsScreen = ({ goToHomeHandler, mealId }: MealDetailsScreenProps) => {
    const { title, imageUrl, ingredients } = MEALS.find(({ id }) => id === mealId) || {}

    const renderIngredients = (renderItem: { item: Ingredients[0] }) => (
        <Text>{renderItem.item}</Text>
    )
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl}} style={styles.image} />
            <Text>Categories Screen! {title}</Text>
            <View>

            </View>
            <FlatList data={ingredients} renderItem={renderIngredients}/>
            <Text></Text>
            <Button title={'Go To Start'} onPress={goToHomeHandler} />
        </View>
    )
}
