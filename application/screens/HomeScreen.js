import React from 'react';
import { Text, View, Button, TextInput, StyleSheet} from 'react-native';
import ListStore from '../components/stores/ListStore';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';



function HomeScreen({ navigation }) {
    const goToHome = () => { navigation.navigate("Home") }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listContainer}>
                <ListStore storelist={storeList} navigation={navigation} />
            </View>
            <View style={styles.buttonContainer}>
            <Icon name="ios-home" size={50}/>
                <Button title='Home'/>
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
        flex:1,
        flexDirection:'row'
        
    },
    listContainer:{
        flex:17,
    },
    container:{
        flex:1,
    }

})




export default HomeScreen;
