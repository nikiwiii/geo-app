import React from 'react';
import MapView, { Marker } from "react-native";
import { FlatList, View } from 'react-native'

class Screen3 extends React.Component {

    render(){
        return(<View>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: 50.111,
                longitude: 20.111,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
            }}
        >
            <FlatList
                data={this.props.route.params.points}
                renderItem={({item}) => <Marker coordinate={{ latitude: item.coords.latitude, longitude: item.coords.longitude, }} title={"pos"} description={"opis"}/>} 
                keyExtractor={item => item.id}
            />
        </MapView>
        </View>)
    }
}

export default Screen3;
