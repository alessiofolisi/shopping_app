import React from 'react';
import { TextInput,Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function SearchProducts() {
    const [value, setValue] = React.useState('');

    return (
        <View style={styles.container}>
            {/* <View style={styles.searchBar}>
                <View style={styles.iconContainer}>
                    <Icon name="ios-search" size={30} color="black"/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        multiline={true}
                        secureTextEntry={false}
                        enablesReturnKeyAutomatically={true}
                        style={styles.searchInput}
                        placeholder='Cerca...'
                        onChangeText={val => setValue(val)} />
                </View>
            </View>
            <View style={styles.resultContainer}>
                <Text style={styles.chronology}>Risultati per: {value} </Text>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    chronology: {
        color: 'black',
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    searchInput: {
        width: 375,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 8,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'flex-end'

    },
    inputContainer: {
        flex: 9,
        
    },
    iconContainer: {
        flex: 1,
        alignItems:'center',
        

    },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        marginTop:15,
    },
    resultContainer:{
        flex:3,
        
    }
})
