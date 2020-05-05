import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import ListStore from '../components/stores/ListStore';



const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <ListStore storelist={storeList} navigation={navigation} />
        </View>
    )
};


const storeList = [
    {
        name: "Decò Sant'Anna",
        id: 1,
        address: "Via Maddalena"
    },
    {
        name: "Di Stefano Alimentari",
        id: 2,
        address: "Via Roma"
    },
    {
        name: "Restivo Alimentari",
        id: 3,
        address: "Corso Garibaldi"
    }
]

// const productList = [{
//     prodotto: "Gelato",
//     n: 1
// },
// {
//     prodotto: "Panna",
//     n: 2
// },
// {
//     prodotto: "Farina",
//     n: 3
// }
// ]




export default HomeScreen;
