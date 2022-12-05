import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native"
import {
    NAV_CATEGORIES,
    NAV_CATEGORIES_NAME,
    NAV_CATEGORY_MEALS,
    NAV_CATEGORY_MEALS_NAME,
    NAV_FAVORITES,
    NAV_FILTER,
    NAV_MEAL_DETAIL
} from "./screen-names";
import {CategoriesScreen} from "../screens/categories/categories.screen";
import {CategoryMealScreen} from "../screens/category-meal/category-meal.screen";
import {MealDetailsScreen} from "../screens/meal-details/meal-details.screen";
import {FavoritesScreen} from "../screens/favorites/favorites.screen";
import {FilterScreen} from "../screens/filter/filter.screen";
import {Colors} from "../constants/colors";
import {Platform} from "react-native";
import {Category} from "../models/category";

const commonNavigationStyles = {
    headerStyle: {
        backgroundColor: Platform.OS == 'android' ? Colors.primary : Colors.white,
    },
    headerTintColor: Platform.OS == 'android' ? Colors.white : Colors.primary,
}

const {Navigator, Screen} = createNativeStackNavigator()

export const StackNavigator = () => {
    return (
        <Navigator initialRouteName={NAV_CATEGORIES}>
            <Screen name={NAV_CATEGORIES} options={{...commonNavigationStyles, title: NAV_CATEGORIES_NAME}}>
                {({navigation}) => {
                    const goToMealsHandler = (categoryId: Category['id']) => {
                        navigation.navigate(NAV_CATEGORY_MEALS, {categoryId})
                    };
                    return <CategoriesScreen goToMealsHandler={goToMealsHandler}/>
                }}
            </Screen>
            <Screen name={NAV_CATEGORY_MEALS} options={{...commonNavigationStyles, title: NAV_CATEGORY_MEALS_NAME}}>
                {({navigation, route}) => {
                    const {categoryId} = route.params
                    const goToMealsHandler = () => navigation.navigate(NAV_MEAL_DETAIL)
                    const goBackHandler = () => navigation.goBack()

                    return (<CategoryMealScreen
                        goToMealsHandler={goToMealsHandler}
                        goBackHandler={goBackHandler}
                        categoryId={categoryId}/>)
                    }
                }
            </Screen>
            <Screen name={NAV_MEAL_DETAIL} component={MealDetailsScreen}/>
            <Screen name={NAV_FAVORITES} component={FavoritesScreen}/>
            <Screen name={NAV_FILTER} component={FilterScreen}/>
        </Navigator>
    )
}