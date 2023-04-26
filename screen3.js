import React from 'react';
import MapView, { Marker } from "react-native-maps";
import { FlatList } from 'react-native'

class Screen3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    render(){
        console.log(this.props.route.params.points[0].coords.latitude)
        return(
            <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: this.props.route.params.points[0].coords.latitude,
                longitude: this.props.route.params.points[0].coords.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
            }}
        >
            {
                this.props.route.params.points.map((item,i) => 
                <Marker 
                    coordinate=
                    {{latitude: item.coords.latitude, 
                    longitude: item.coords.longitude}}      

                    title={'position number ' + i}
                />)
            }
        </MapView>)
    }
}

export default Screen3;
