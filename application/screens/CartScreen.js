import React from 'react';
import { Text, View, StyleSheet,ImageBackground} from 'react-native';
import { withNavigation } from 'react-navigation';

function CartScreen ({
    

}){
return(
    <View style={StyleSheet.container}>
        {/* <ImageBackground source={image} style={StyleSheet.imagebackground}></ImageBackground> */}
    </View>
);
}

export default withNavigation(CartScreen);

const style=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
    imagebackground:{
        flex: 1,
    resizeMode: "cover",
    justifyContent: "center"

    }
})
const image = () => { uri: "https://reactjs.org/logo-og.png" }
