import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
    NAV_CATEGORIES,
    NAV_CATEGORIES_NAME,
    NAV_CATEGORY_MEALS,
    NAV_CATEGORY_MEALS_NAME,
    NAV_FAVORITES,
    NAV_FILTER,
    NAV_MEAL_DETAIL, NAV_MEAL_DETAIL_NAME
} from "./screen-names";
import {CategoriesScreen} from "../screens/categories/categories.screen";
import {CategoryMealScreen} from "../screens/category-meal/category-meal.screen";
import {MealDetailsScreen} from "../screens/meal-details/meal-details.screen";
import {FavoritesScreen} from "../screens/favorites/favorites.screen";
import {FilterScreen} from "../screens/filter/filter.screen";
import {Colors} from "../constants/colors";
import {Category} from "../models/category";
import {NavigationProp, ParamListBase, RouteProp, useRoute} from "@react-navigation/native";
import {CATEGORIES} from "../data/dummy-data";
import {useLayoutEffect} from "react";

type ScreenNavigatorProps = {
    navigation: NavigationProp<ParamListBase>
}

const commonNavigationStyles = {
    headerStyle: {
        backgroundColor: Colors.background,
    },
    headerTintColor: Colors.white,
    contentStyle: {
        backgroundColor: Colors.lightBackground,
    }
}

function useRouteParams<T = Record<string, string>> () {
    return useRoute<RouteProp<{ params: Readonly<T> }>>()
}

const {Navigator, Screen} = createNativeStackNavigator()

const createCategoryMealsScreenNavigator = ({navigation}: ScreenNavigatorProps) => {
    const { params: { categoryId }} = useRouteParams<{ categoryId: string }>()
    const { title } = CATEGORIES.find(({ id }) => id === categoryId ) || {}

    const goToMealsHandler = (mealId: string) => navigation.navigate(NAV_MEAL_DETAIL, { mealId })
    const goBackHandler = () => navigation.goBack()

    useLayoutEffect(() => {
        navigation.setOptions({ title })
    }, [])

    return (
        <CategoryMealScreen
            goToMealsHandler={goToMealsHandler}
            goBackHandler={goBackHandler}
            categoryId={categoryId}
        />
    )
}

const createCategoryScreenNavigator = ({navigation}: ScreenNavigatorProps) => {
    const goToMealsHandler = (categoryId: Category['id']) => {
        navigation.navigate(NAV_CATEGORY_MEALS, {categoryId})
    };
    return <CategoriesScreen goToMealsHandler={goToMealsHandler}/>
}

const createMealDetailsScreenNavigator = ({ navigation }: ScreenNavigatorProps) => {
    const goToHomeHandler = () => { navigation.navigate(NAV_CATEGORIES) };

    const { params: { mealId } } = useRouteParams<{ mealId: string }>()

    return (
        <MealDetailsScreen goToHomeHandler={goToHomeHandler} mealId={mealId}/>
    )
}

export const StackNavigator = () => {
    return (
        <Navigator initialRouteName={NAV_CATEGORIES} screenOptions={commonNavigationStyles}>
            <Screen name={NAV_CATEGORIES} options={{title: NAV_CATEGORIES_NAME}}>
                {createCategoryScreenNavigator}
            </Screen>
            <Screen name={NAV_CATEGORY_MEALS} options={{title: NAV_CATEGORY_MEALS_NAME}}>
                {createCategoryMealsScreenNavigator}
            </Screen>
            <Screen name={NAV_MEAL_DETAIL} options={{ title: NAV_MEAL_DETAIL_NAME }}>
                {createMealDetailsScreenNavigator}
            </Screen>
            <Screen name={NAV_FAVORITES} component={FavoritesScreen}/>
            <Screen name={NAV_FILTER} component={FilterScreen}/>
        </Navigator>
    )
}
