import React from 'react';
import { MapView, Marker } from 'react-native-maps';

class Screen3 extends React.Component {

    render(){
        return(<MapView
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
                renderItem={({item}) => <Marker latitude={item.latitude} longitude={item.longitude} />}
                keyExtractor={item => item.id}
            />
        </MapView>)
    }
}

export default Screen3;
