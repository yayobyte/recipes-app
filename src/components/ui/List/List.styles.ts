import { StyleSheet } from 'react-native'
import {Colors} from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
    },
    item: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 24,
        color: Colors.secondary,
        borderRadius: 6,
        backgroundColor: Colors.subtitle,
        textAlign: 'center',
    }
})
