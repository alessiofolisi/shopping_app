import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

function AccountScreen({ }){
return (
    <SafeAreaView style={styles.container}>
        <Text>Schermata Account</Text>
    </SafeAreaView>
);
}

export default withNavigation(AccountScreen);
const styles=StyleSheet.create({
    container:{flex:1
    }
})
