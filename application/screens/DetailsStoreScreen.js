import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import ListProducts from '../components/ListProducts';
import SearchProducts from '../components/SearchProducts';



function DetailsStoreScreen({ navigation, route: { params: { name, id, address } } }) {
    const goToShop = () => { navigation.navigate("Dettagli Shop", { name, id, address }) }
    return (
        <View style={styles.container}>
            <View style={styles.searchProductsContainer}ß>
                <SearchProducts/>
            </View>
            <View style={styles.listContainer}>
                <ListProducts productlist={productList} navigation={navigation} />
                <Text>{name}</Text>
            </View>
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



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchProductsContainer: {
        flex: 1,  
    },
    listContainer:{
        flex:5
    }
})


export default withNavigation(DetailsStoreScreen);
