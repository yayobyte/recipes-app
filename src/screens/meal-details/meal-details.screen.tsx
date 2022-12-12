import {Button, Text, View, Image} from "react-native";
import {MEALS} from "../../data/dummy-data";
import {styles} from './meal-details.styles'
import React from "react";
import {MealDetailInfo} from "../../components/meal-detail-info";
import {Subtitle} from "../../components/ui/Subtitle";
import {List} from "../../components/ui/List";

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
            <List list={ingredients} />
            <Subtitle text={'Steps'} />
            <List list={steps} />
            <Text></Text>
            <Button title={'Go To Start'} onPress={goToHomeHandler}/>
        </View>
    )
}
