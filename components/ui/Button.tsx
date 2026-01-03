import { Text, TouchableOpacity, StyleSheet} from "react-native";

type ButtonProps = { 
    title: string | number;
    onPress: () => void;
   
};

export function Button({title, onPress}: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>

        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007AFF",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",     
    },
    text: {
        color: "#FFF",
        fontWeight: "bold",       
    }
});