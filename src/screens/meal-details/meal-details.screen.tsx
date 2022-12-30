import {Button, Text, View, Image, ScrollView} from "react-native";
import {MEALS} from "../../data/dummy-data";
import {styles} from './meal-details.styles'
import React, {useContext, useLayoutEffect} from "react";
import {MealDetailInfo} from "../../components/meal-detail-info";
import {Subtitle} from "../../components/ui/Subtitle";
import {List} from "../../components/ui/List";
import {IconButton} from "../../components/ui/IconButton";
import {Colors} from "../../constants/colors";
import {useNavigation} from "@react-navigation/native";
import {FavoritesContext} from "../../store/context/favorites.context";

type MealDetailsScreenProps = {
    goToHomeHandler: () => void
    mealId: string
}

export const MealDetailsScreen = ({goToHomeHandler, mealId}: MealDetailsScreenProps) => {
    const navigation = useNavigation()
    const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext)

    const {
        title,
        imageUrl,
        ingredients = [],
        steps = [],
        duration = 0,
        affordability = '',
        complexity = ''
    } = MEALS.find(({id}) => id === mealId) || {}

    const isFavorite = ids.includes(mealId)

    const setFavorite = () => {
        return isFavorite ? removeFavorite(mealId) : addFavorite(mealId)
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton type={isFavorite ? 'star' : 'star-outline'} color={Colors.white} onPress={setFavorite}/>
            }
        })
    }, [isFavorite])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{uri: imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <MealDetailInfo
                duration={duration}
                complexity={complexity}
                affordability={affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listContainer}>
                <Subtitle text={'Ingredients'} />
                <List list={ingredients} />
                <Subtitle text={'Steps'} />
                <List list={steps} />
            </View>
            <Button title={'Go To Start'} onPress={goToHomeHandler}/>
        </ScrollView>
    )
}
