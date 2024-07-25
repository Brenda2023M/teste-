import React from "react";
import { View, Text} from "react-native";
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.textTitle}>
            <Text style={styles.textTitle}>ONBITHEALTH...</Text>
            <Text>25/07/2024</Text>
            <Text>Aula 02 parte 3</Text>
        </View>
    );
} 