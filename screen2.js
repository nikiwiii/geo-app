import React from 'react';
import { View, StyleSheet, Pressable, Text, FlatList, ActivityIndicator } from 'react-native';
import Item from './Item'
import * as Location from 'expo-location'

class Screen2 extends React.Component {
    constructor(props) {
      Location.requestForegroundPermissionsAsync();
      super(props);
      this.state = {
        points: [],
        loading: false
      }
    }
    goToScr3 = (el) => {
        this.props.navigation.navigate('details', { el })
    }
    render(){
        return(<View style={styles.centered}>
                <Pressable style={styles.buttons} onPress={() => this.delAll()}><Text style={styles.text}>DELETE ALL</Text></Pressable> 
                <Pressable style={styles.buttons} onPress={() => this.newPoint()}><Text style={styles.text}>PLACE NEW POINT</Text></Pressable>
                <Pressable style={styles.buttons} onPress={() => this.props.navigation.navigate('details', {points: this.state.points})}><Text style={styles.text}>GO TO MAP</Text></Pressable> 
                {
                    this.state.loading ?
                        <ActivityIndicator size="large" color="white" />
                        :
                        console.log('something done')
                }
                <FlatList
                    data={this.state.points}
                    renderItem={({item}) => <Item key={item.id} navigation={this.props.navigation} loc={item} goNext={() => this.props.navigation.navigate('details', {points: item})} />}
                    keyExtractor={item => item.id}
                />
            </View>)
    }
    newPoint = async() => {
        this.setState({loading: true})
        let crd = await Location.getCurrentPositionAsync({})
        this.setState({
            points: [...this.state.points, crd],
            loading: false
        })
    }
    delAll = () => {
        this.setState({
            points: []
        })
    }
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#2A4494'
    },
    list: {
        flex: .9,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttons: {
        height: 40,
        alignSelf: 'center',
        borderColor: 'transparent',
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        color: 'rgba(255 255 255 / .5)',
        fontWeight: 'bold',
        fontSize: 32
    }
});

export default Screen2;
