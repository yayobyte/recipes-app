import { FlatList, ListRenderItem, Text, TouchableOpacity, View} from "react-native";
import {styles} from './categories.screen.styles'
import {CATEGORIES} from "../../data/dummy-data";
import {Category} from "../../models/category";

type CategoriesScreenProps = {
  goToMealsHandler:  (categoryId: Category['id']) => void,
}

const RenderGridItem = ({ renderItem, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.gridItem}>
      <Text>
        {renderItem.item.title}
      </Text>
    </View>
  </TouchableOpacity>
)

export const CategoriesScreen = ({ goToMealsHandler }: CategoriesScreenProps) => {
    const renderGridItemTouchable = (renderItem: ListRenderItem<Category>) => (
      <RenderGridItem renderItem={renderItem} onPress={() => goToMealsHandler(renderItem.item.id)} />
    )

    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItemTouchable} />
    )
}
