import React, { PureComponent } from "react";
import { Text, View , StyleSheet} from "react-native";
import MapView, { PROVIDER_GOOGLE , Marker} from "react-native-maps";

export default class Map extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 10.763391,
            longitude: 106.664597,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          <MapView.Marker
              coordinate={{
                latitude: 10.763391,
                longitude: 106.664597,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
              }}
              title="Home"
              description="My home"
          />
        </MapView>
          
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});