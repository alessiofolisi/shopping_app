import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';




const SingleStore = ({ name, id, address, navigation }) => {
    const goToShop = () => {
        navigation.navigate("Dettagli Shop", { name, id, address })
    }
    return (
        <View style={styles.container} style={styles.separator} >
            <Text style={styles.name}>{name} {address}</Text>
            <TouchableOpacity style={styles.button} onPress={goToShop}>
                <Text>Vai al Negozio</Text>
            </TouchableOpacity>
        </View>

    );

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        padding: 20,
        marginBottom: 5,
        flex:1,
    },
    name: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    },
    separator: {
        padding: 30,
        marginVertical: 8,
        backgroundColor: '#22E8D3',
        borderBottomColor: 'green',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#C1CBCA",
        padding: 13,
        width: 150,
        alignSelf: "center",
        marginTop: 10,


    },
  

})


export default withNavigation(SingleStore);



