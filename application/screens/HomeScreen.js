import React from 'react';
import { Text, View,TextInput, StyleSheet } from 'react-native';
import ListStore from '../components/stores/ListStore';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';



function HomeScreen({ navigation }) {
    const goToHome = () => { navigation.navigate("Home") }
    const goToSearch = () => {navigation.navigate("Search")}
    const goToAccount = () => {navigation.navigate("Account")}
    const goToCart = () => {navigation.navigate("Cart")}
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listContainer}>
                <ListStore storelist={storeList} navigation={navigation} />
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
    },
]

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        padding:10,
        justifyContent: 'space-between'
        
        


    },
    listContainer: {
        flex: 14,
    },
    container: {
        flex: 1,
    }

})




export default HomeScreen;
