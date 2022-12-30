import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from '@react-navigation/drawer'
import {
    NAV_CATEGORIES,
    NAV_CATEGORIES_NAME,
    NAV_CATEGORY_MEALS,
    NAV_CATEGORY_MEALS_NAME,
    NAV_DRAWER_CATEGORIES,
    NAV_FAVORITES,
    NAV_FAVORITES_NAME,
    NAV_FILTER,
    NAV_MEAL_DETAIL,
    NAV_MEAL_DETAIL_NAME
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
import React, {useLayoutEffect} from "react";
import {Ionicons} from '@expo/vector-icons'

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

const commonDrawerNavigationStyles = {
    ...commonNavigationStyles,
    sceneContainerStyle: {
        backgroundColor: Colors.lightBackground
    },
    drawerContentStyle: {
        backgroundColor: Colors.background,
    },
    drawerInactiveTintColor: Colors.white,
    drawerActiveTintColor: Colors.background,
    drawerActiveBackgroundColor: Colors.white,
}

function useRouteParams<T = Record<string, string>>() {
    return useRoute<RouteProp<{ params: Readonly<T> }>>()
}

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const createCategoryMealsScreenNavigator = ({navigation}: ScreenNavigatorProps) => {
    const {params: {categoryId}} = useRouteParams<{ categoryId: string }>()
    const {title} = CATEGORIES.find(({id}) => id === categoryId) || {}

    const goToMealsHandler = (mealId: string) => navigation.navigate(NAV_MEAL_DETAIL, {mealId})
    const goBackHandler = () => navigation.goBack()

    useLayoutEffect(() => {
        navigation.setOptions({title})
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

const createMealDetailsScreenNavigator = ({navigation}: ScreenNavigatorProps) => {
    const {params: {mealId}} = useRouteParams<{ mealId: string }>()

    const goToHomeHandler = () => {
        navigation.navigate(NAV_CATEGORIES)
    };

    return (
        <MealDetailsScreen goToHomeHandler={goToHomeHandler} mealId={mealId}/>
    )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={commonDrawerNavigationStyles}>
            <Drawer.Screen
                name={NAV_DRAWER_CATEGORIES}
                options={{
                    title: NAV_CATEGORIES_NAME,
                    drawerIcon: ({color, size}) => <Ionicons name={'home'} color={color} size={size}/>
                }}>
                {createCategoryScreenNavigator}
            </Drawer.Screen>
            <Drawer.Screen
                name={NAV_FAVORITES}
                options={{
                    title: NAV_FAVORITES_NAME,
                    drawerIcon: ({ color, size }) => <Ionicons name={'star'} color={color} size={size} />
                }}
            >
                {createFavoritesScreenNavigator}
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}

const createFavoritesScreenNavigator = ({navigation}: ScreenNavigatorProps) => {
    const goToMealsHandler = (mealId: string) => navigation.navigate(NAV_MEAL_DETAIL, {mealId})

    return (
        <FavoritesScreen goToMealsHandler={goToMealsHandler} />
    )
}

export const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={NAV_CATEGORIES} screenOptions={commonNavigationStyles}>
            <Drawer.Screen name={NAV_CATEGORIES} options={{headerShown: false}}>
                {() => <DrawerNavigator/>}
            </Drawer.Screen>
            <Stack.Screen name={NAV_CATEGORY_MEALS} options={{title: NAV_CATEGORY_MEALS_NAME}}>
                {createCategoryMealsScreenNavigator}
            </Stack.Screen>
            <Stack.Screen name={NAV_MEAL_DETAIL} options={{title: NAV_MEAL_DETAIL_NAME}}>
                {createMealDetailsScreenNavigator}
            </Stack.Screen>
            <Stack.Screen name={NAV_FAVORITES} options={{title: NAV_FAVORITES_NAME}}>
                {createFavoritesScreenNavigator}
            </Stack.Screen>
            <Stack.Screen name={NAV_FILTER} component={FilterScreen}/>
        </Stack.Navigator>
    )
}
