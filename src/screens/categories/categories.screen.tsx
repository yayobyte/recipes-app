import { FlatList} from "react-native";
import {CATEGORIES} from "../../data/dummy-data";
import {Category, CategoryAttributes} from "../../models/category";
import {CategoryGridItem} from "../../components/category-grid-item";

type CategoriesScreenProps = {
  goToMealsHandler:  (categoryId: Category['id']) => void,
}

export const CategoriesScreen = ({ goToMealsHandler }: CategoriesScreenProps) => {
    const renderGridItem = (renderItem: { item: CategoryAttributes }) => (
      <CategoryGridItem item={renderItem.item} onPress={() => goToMealsHandler(renderItem.item.id)} />
    )

    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} keyExtractor={(item) => item.id}/>
    )
}
