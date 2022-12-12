import {StyleSheet} from "react-native";
import {Colors} from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginBottom: 48,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: Colors.white,
    },
    detailText: {
        color: Colors.white,
    },
    listContainer: {
        padding: 12,
    },
})
