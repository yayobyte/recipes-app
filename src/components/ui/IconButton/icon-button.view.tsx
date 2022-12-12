import {Pressable, ViewStyle} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import {Colors} from "../../../constants/colors";
import {styles} from "./icon-button.styles";

type IconButtonProps = {
    type: any
    onPress?: () => void
    color?: string
    style?: ViewStyle
}

export const IconButton = ({type, onPress, color, style}: IconButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            android_ripple={{color: Colors.subtitle}}
            style={({pressed}) => [pressed ? styles.pressed : {}, style]}
        >
            <Ionicons name={type} size={24} color={color}/>
        </Pressable>
    )
}
