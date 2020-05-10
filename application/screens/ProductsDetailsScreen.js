import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';



function ProductsDetailsScreen({ navigation }) {
    const goToHome = () => { navigation.navigate("Home") }
    const goToSearch = () => { navigation.navigate("Search") }
    const goToAccount = () => { navigation.navigate("Account") }
    const goToCart = () => {navigation.navigate("Cart")}
    const [value, setValue] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.productsContainer}>

            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={goToHome}>
                    <View><Icon name="ios-home" size={50} /></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToSearch}>
                    <View><Icon name="ios-search" size={50} /></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToCart}>
                    <View><Icon name="md-cart" size={50}/></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToAccount}>
                    <View><Icon name="md-contact" size={50} /></View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',

    },
    productsContainer: {
        flex: 14,
    }
})

export default withNavigation(ProductsDetailsScreen)