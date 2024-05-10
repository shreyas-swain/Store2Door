// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_KEY } from '../constants'
import { io } from "socket.io-client";
import * as Location from 'expo-location'

export default function OrderTrack() {
  const [curLocation, setCurLocation] = useState({
    latitude: 20.2945,
    longitude: 85.8632,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [dropCords, setDropCords] = useState({
    latitude: 20.2910,
    longitude: 85.8456,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const mapRef = useRef();

  useEffect(() => {
    const socket = io("https://4d3cf204-e578-4248-be04-2c943b5b73ed-00-3i1l8ko4xx6ui.janeway.replit.dev/");
    socket.on('updateLocation', data => {
      console.log(data);
      setCurLocation(data);
    });
    // Cleanup function for socket connection
    return () => {
      socket.disconnect();
    };
  }, [curLocation]);


  return (
    <View style={styles.container}>
      <MapView
      ref={mapRef}
        style={StyleSheet.absoluteFill}
        initialRegion={{...curLocation, latitudeDelta: Math.abs(dropCords.latitude - curLocation.latitude) * 1.5,
          longitudeDelta: Math.abs(dropCords.longitude - curLocation.longitude) * 1.5,}}
      >
        <Marker coordinate={curLocation} />
        <Marker coordinate={dropCords} />
          {curLocation && <Marker coordinate={curLocation} pinColor="blue" />}
        <MapViewDirections 
        origin={curLocation} 
        destination={dropCords} 
        apikey={GOOGLE_KEY}
        strokeWidth={3}
        strokeColor="red"
        optimizeWaypoints={true}
        onReady={result => {
          mapRef.current.fitToCoordinates(result.coordinates,{
            edgePadding:{
              right: 30,
              left: 30,
              bottom:300,
              top:100
            }
          })
        }}
        />
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
