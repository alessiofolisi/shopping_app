import React from 'react';
import { Text, View } from 'react-native';
import SingleProducts from './stores/SingleProducts';


const ListProducts = ({productlist, navigation}) => (
    <View>
        {
            productlist.map(({name, id}) => {
                return (<SingleProducts name={name} id={id} navigation={navigation} />)
            })
        }
    </View>
);

export default ListProducts;
