import {Button, Text, View, Image} from "react-native";
import {MEALS} from "../../data/dummy-data";
import {styles} from './meal-details.styles'
import React from "react";
import {MealDetailInfo} from "../../components/meal-detail-info";
import {Subtitle} from "../../components/ui/Subtitle";

type MealDetailsScreenProps = {
    goToHomeHandler: () => void
    mealId: string
}

export const MealDetailsScreen = ({goToHomeHandler, mealId}: MealDetailsScreenProps) => {
    const {
        title,
        imageUrl,
        ingredients = [],
        steps = [],
        duration = 0,
        affordability = '',
        complexity = ''
    } = MEALS.find(({id}) => id === mealId) || {}

    return (
        <View style={styles.container}>
            <Image source={{uri: imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <MealDetailInfo
                duration={duration}
                complexity={complexity}
                affordability={affordability}
                textStyle={styles.detailText}
            />
            <Subtitle text={'Ingredients'} />
            <View style={styles.ingredients}>
                {ingredients.map((ingredient, index) => (
                    <Text key={`ingredient_${index}`}>{ingredient}</Text>
                ))}
            </View>
            <Subtitle text={'Steps'} />
            <View style={styles.steps}>
                {steps.map((step, index) => (
                    <Text key={`step_${index}`}>{step}</Text>
                ))}
            </View>
            <Text></Text>
            <Button title={'Go To Start'} onPress={goToHomeHandler}/>
        </View>
    )
}
