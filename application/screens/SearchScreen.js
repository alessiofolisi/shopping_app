import React from 'react';
import { Text, View, SafeAreaView, StyleSheet} from 'react-native';
import SearchProducts from '../components/SearchProducts';

function SearchScreen ({ }){
return (
    <SafeAreaView style={styles.container}>
        <SearchProducts/>
    </SafeAreaView>
);
}

export default SearchScreen;

const styles= StyleSheet.create({
    container:{
        flex:1,
    }
})