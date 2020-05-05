import React from 'react';
import { View, StyleSheet} from 'react-native';



export default function ProductsDetailsScreen() {
    const [value, setValue] = React.useState('');

    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
})

