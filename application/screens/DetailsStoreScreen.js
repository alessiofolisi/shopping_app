import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import ListProducts from '../components/ListProducts';



function DetailsStoreScreen({ navigation, route: { params: { name, id, address } } }) {
    const goToShop = () => { navigation.navigate("Dettagli Shop", { name, id, address }) }
    return (
        <View>
            <ListProducts productlist={productList} navigation={navigation} />
            <Text>{name}</Text>
        </View>
    );
}

const productList = [{
    name: "Gelato",
    id: 1,
    image: 'https://reactnative.dev/img/tiny_logo.png'
},
{
    name: "Panna",
    id: 2
},
{
    name: "Farina",
    id: 3
}
]



// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "#0c8d0c",
//         padding: 20
//     }
//     }

export default withNavigation(DetailsStoreScreen);
