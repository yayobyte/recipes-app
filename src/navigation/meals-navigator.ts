import { createStackNavigator } from "react-navigation-stack";
import {NAV_CATEGORIES, NAV_CATEGORY_MEALS, NAV_FAVORITES, NAV_FILTER, NAV_MEAL_DETAIL} from "./screen-names";
import {CategoriesScreen} from "../screens/categories/categories.screen";
import {CategoryMealScreen} from "../screens/category-meal/category-meal.screen";
import {MealDetailsScreen} from "../screens/meal-details/meal-details.screen";
import {FavoritesScreen} from "../screens/favorites/favorites.screen";
import {FilterScreen} from "../screens/filter/filter.screen";

export const mealsNavigator = createStackNavigator({
    [NAV_CATEGORIES]: CategoriesScreen,
    [NAV_CATEGORY_MEALS]: CategoryMealScreen,
    [NAV_MEAL_DETAIL]: MealDetailsScreen,
    [NAV_FAVORITES]: FavoritesScreen,
    [NAV_FILTER]: FilterScreen,
})
