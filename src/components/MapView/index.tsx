import React, { useEffect, useState } from 'react'
import { Alert, Image, StyleSheet, View } from 'react-native'
import Icon from 'react-native-dynamic-vector-icons'
import MapView, { Marker, Region } from 'react-native-maps'
import { Theme } from '../../theme'

interface IMarker {
  id: number
  latitude: number
  longitude: number
}

interface IProps {
  region: IRegion
  markers: IMarker[]
  handleMarker: (id: number) => void
  selectedMarkerId?: number
}

interface IRegion {
  latitude: number
  longitude: number
}

const LATITUDE_DELTA = 0.013
const LONGITUDE_DELTA = 0.013

const MapViewer = (props: IProps) => {
  const [state, setState] = useState({
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    makers: [
      {
        id: 1,
        latitude: 37.78521,
        longitude: -122.401427,
      },
      {
        id: 2,
        latitude: 37.785599,
        longitude: -122.409317,
      },
      {
        id: 3,
        latitude: 37.78597,
        longitude: -122.40743,
      },
    ],
  })

  // useEffect(() => {
  //   const watchID = navigator.geolocation.watchPosition(
  //     position => {
  //       let lat = position.coords.latitude
  //       let long = position.coords.longitude

  //       let initialRegion = {
  //         latitude: lat,
  //         longitude: long,
  //         latitudeDelta: LATITUDE_DELTA,
  //         longitudeDelta: LONGITUDE_DELTA,
  //       }

  //       setState({ ...state, region: initialRegion })
  //     },
  //     error => Alert.alert(JSON.stringify(error)),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   )

  //   // return function cleanup() {
  //   //   navigator.geolocation.clearWatch(watchID)
  //   // }
  // })

  const Showregion = {
    ...props.region,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  }
  // console.log('showregion', Showregion)

  const onRegionChange = (region: Region) => {
    setState({ ...state, region })
  }

  // console.log('location', state.region)

  const hanldeMarker = (id: number) => {
    props.handleMarker(id)
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        // initialRegion={state.initialPosition}
        // onRegionChange={onRegionChange}
        region={Showregion}
      >
        {props.markers.map((item: IMarker, i: number) => {
          return (
            <Marker
              key={i}
              coordinate={item}
              onPress={() => hanldeMarker(item.id)}
            >
              {item.id === props.selectedMarkerId ? (
                <View style={styles.activeMarker}>
                  <Image
                    style={styles.medkit}
                    source={require('../../assets/Icons/IOS/PNG/medkit-marker.png')}
                  />
                </View>
              ) : (
                <View style={styles.marker}>
                  <Icon
                    name="plus"
                    type="FontAwesome"
                    style={{ color: 'white', fontSize: 15 }}
                  />
                </View>
              )}
            </Marker>
          )
        })}
      </MapView>
    </View>
  )
}

export default MapViewer

const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: Theme.Resolution.H - 64 * Theme.Ratio.H,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    width: 24 * Theme.Ratio.H,
    height: 24 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19C73F',
    borderRadius: 50,
    shadowColor: '#19C73F',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  activeMarker: {
    width: 40 * Theme.Ratio.H,
    height: 40 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19C73F',
    borderRadius: 50,
    shadowColor: '#19C73F',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  medkit: {
    height: 20 * Theme.Ratio.H,
    width: 20 * Theme.Ratio.H,
  },
})
