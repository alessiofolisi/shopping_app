import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView,TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ListProducts from '../components/ListProducts';
import Icon from 'react-native-vector-icons/Ionicons';





function DetailsStoreScreen({ navigation, route: { params: { name, id, address } } }) {
    const goToHome = () => { navigation.navigate("Home") }
    const goToSearch = () => {navigation.navigate("Search")}
    const goToAccount = () => {navigation.navigate("Account")}
    const goToCart = () => {navigation.navigate("Cart")}
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listContainer}>
                <ListProducts productlist={productList} navigation={navigation} />
                <Text>{name}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={goToHome}>
                <View><Icon name="ios-home" size={50}/></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToSearch}>
                    <View><Icon name="ios-search" size={50}/></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToCart}>
                    <View><Icon name="md-cart" size={50}/></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToAccount}>
                    <View><Icon name="md-contact" size={50}/></View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
    listContainer:{
        flex:14
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        padding:10,
        justifyContent: 'space-between'
    },
})


export default withNavigation(DetailsStoreScreen);
