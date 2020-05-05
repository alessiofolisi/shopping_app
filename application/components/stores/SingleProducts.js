import React from 'react';
import {TextInput, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function SingleProducts({image , name , id , navigation}) {
    const goToProduct = () => { navigation.navigate("Dettagli Prodotto", { name, id , image }) }
    const [value, onChangeText] = React.useState('');


    return (
        <View style = {styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity style={styles.button} onPress={goToProduct} > 
                <Text>Vai al prodotto</Text>
            </TouchableOpacity>
        </View>
    );

}
const styles = StyleSheet.create({

    container: {
        backgroundColor: "#22E8D3",
        padding: 20,
        marginBottom: 5,
    },
    name: {
        color: "#000",
        fontSize:25,
        fontWeight: "bold",
        alignSelf: "center",
        
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    button: {
        alignItems: "center",
        backgroundColor: "white",
        padding: 14,
        width: 150,
        alignSelf: "center",
        marginTop: 8,
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
})

export default SingleProducts;
