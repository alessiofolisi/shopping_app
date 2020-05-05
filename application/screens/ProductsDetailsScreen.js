import React from 'react';
import { TextInput, Image,Text, View, StyleSheet} from 'react-native';

export default function ProductsDetailsScreen() {
    const [value, setValue] = React.useState('');
  
    return (
        <View>
        <TextInput
        multiline={true}
        secureTextEntry={false}
        enablesReturnKeyAutomatically={true}
        style={styles.search}
        placeholder='Cerca...'
        onChangeText={val => setValue(val)}/>
    <Text style={styles.chronology}>Risultati per: {value} </Text>
    </View>
    );
  }
  
const styles= StyleSheet.create ({
    text:{
        color: 'white',
        padding:100,
        alignSelf: 'center',
        fontSize : 20,
    },
    container:{
        backgroundColor:'black',
        padding: 10,
        alignSelf:'center'
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
      chronology:{
          color: 'black',
          padding: 10,
          fontSize: 15,
          fontWeight: 'bold',
          alignSelf:'center',
      },
      search:{
        width:360,
        height: 40, 
        borderColor: 'gray', 
        borderWidth:1,
        alignSelf:'flex-end'

    }
})

