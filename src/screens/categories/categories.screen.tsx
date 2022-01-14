import { FlatList, ListRenderItem, Text, TouchableOpacity, View} from "react-native";
import {styles} from './categories.screen.styles'
import {NAV_CATEGORY_MEALS} from "../../navigation/screen-names";
import {CATEGORIES} from "../../data/dummy-data";
import {Category} from "../../models/category";

type CategoriesScreenProps = {
    navigation:  any,
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

export const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
    const goToMealsHandler = () => { navigation.navigate({ routeName: NAV_CATEGORY_MEALS }) };

    const renderGridItemTouchable = (renderItem: ListRenderItem<Category>) => (
      <RenderGridItem renderItem={renderItem} onPress={goToMealsHandler} />
    )

    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItemTouchable} />
    )
}
