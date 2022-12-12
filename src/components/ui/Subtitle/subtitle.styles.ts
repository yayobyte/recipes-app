import { StyleSheet } from 'react-native'
import {Colors} from "../../../constants/colors";

export const styles = StyleSheet.create({
    subtitle: {
        color: Colors.subtitle,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 8,
        marginVertical: 4,
        borderBottomColor: Colors.subtitle,
        borderBottomWidth: 2,
        marginHorizontal: 24
    },
})
