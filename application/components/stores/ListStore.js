import React from 'react';
import { View, FlatList } from 'react-native';
import SingleStore from './SingleStore';

const ListStore = ({ storelist, navigation }) => (
    <View>
        {
            storelist.map(({ name, address, id }) => {
                return (<SingleStore name={name} address={address} id={id} key={id} navigation={navigation} />)
            })
        }
        {/* <FlatList data={storelist}
            renderItem={({name , address , id}) => (
            <SingleStore name={name} address={address} id={id} navigation={navigation} />
            )}
            keyExtractor={shop => shop.id}
            refreshing={true}/> */}
    </View>

);

export default ListStore