import React from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

class Item extends React.Component {
    render() {
        const img = require('./person.png')
        return (
            <Pressable style={styles.centered} onPress={() => this.props.navigation.navigate('details', { points: [this.props.loc] })}>
                <Image source={img} style={styles.image} />
                <View>
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        longitude: {this.props.loc.coords.longitude}
                        </Text>
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        latitude: {this.props.loc.coords.latitude}
                        </Text>
                </View>
            </Pressable>)
    }
}
const styles = StyleSheet.create({
    centered: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'rgba(255 255 255 / .07)',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        opacity: .7
    },
    buttons: {
        height: 40,
        marginBottom: 20,
        alignSelf: 'center',
        borderColor: 'gainsboro',
        borderBottomWidth: .5,
        borderTopWidth: .5,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'gainsboro',
        fontWeight: 'bold',
        fontSize: 20
    }
});
export default Item;
