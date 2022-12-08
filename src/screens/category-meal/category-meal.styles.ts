import {Platform, StyleSheet} from "react-native";

const isAndroid = Platform.OS === 'android'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 0},
        shadowRadius: 4,
        overflow: isAndroid ? 'hidden': 'visible',
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        textTransform: 'capitalize',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
      opacity: 0.5
    },
})
