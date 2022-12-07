import {Platform, StyleSheet} from "react-native";

const isAndroid = Platform.OS === 'android'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 0},
        shadowRadius: 4,
        backgroundColor: 'white',
        overflow: isAndroid ? 'hidden': 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.25,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})
