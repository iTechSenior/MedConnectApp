import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { Region } from 'react-native-maps'
import { useNavigation } from 'react-navigation-hooks'
import MapViewer from '../../../components/MapView'
import SlidingSheet from '../../../components/TodayActivityBottomSheet'
import styles from './styles'

import { LocationContext } from '../../../AppContext'

interface State {
  // tabBarVisible: boolean
  // appointmentList: Appointment[]
  region: IRegion
  markers: IMarker[]
  selectedMarkerId: number
}

interface IRegion {
  latitude: number
  longitude: number
}

interface IMarker {
  id: number
  latitude: number
  longitude: number
  // selected: boolean
}

interface Appointment {
  id: number
  clientName: string
  location: string
  time: string
}

const TodayActivityScreen = () => {
  const STAR_IMAGE = require('../../../assets/Icons/IOS/PNG/star-gray.png')

  const appointmentList = [
    {
      id: 1,
      clientName: 'Appointment Client Name1',
      date: 'MONDAY 13, MAY',
      time: '10:00 AM',
      location: '7919 Cottage Dr.Meriden, CT 6450',
      departmentName: 'Department Name1',
      phoneNumber: '+1-202-555-0162',
      totalPayment: 160,
      estimateTime: 1,
      duration: 30,
      payRate: 120,
      bonus: 40,
    },
    {
      id: 2,
      clientName: 'Appointment Client Name2',
      date: 'TUESDAY 14, MAY',
      time: '11:30 AM',
      location: '7919 Cottage Dr.Meriden, CT 6450',
      departmentName: 'Department Name2',
      phoneNumber: '+1-202-555-0162',
      totalPayment: 300,
      estimateTime: 3,
      duration: 10,
      payRate: 150,
      bonus: 70,
    },
    {
      id: 3,
      clientName: 'Appointment Client Name3',
      date: 'Wednesday 15, MAY',
      time: '16:00 AM',
      location: '7919 Cottage Dr.Meriden, CT 6450',
      departmentName: 'Department Name',
      phoneNumber: '+1-202-555-0162',
      totalPayment: 1000,
      estimateTime: 2,
      duration: 50,
      payRate: 300,
      bonus: 500,
    },
  ]

  const [state, setState] = useState<State>({
    region: {
      latitude: 0,
      longitude: 0,
    },
    markers: [
      {
        id: 1,
        latitude: 37.78281,
        longitude: -122.401427,
      },
      {
        id: 2,
        latitude: 37.785599,
        longitude: -122.409317,
      },
      {
        id: 3,
        latitude: 37.78797,
        longitude: -122.40743,
      },
    ],
    selectedMarkerId: -1,
  })
  // tabBarVisible: true,

  // const handleTabBar = (): void => {
  //   navigation.setParams({ tabBarVisible: !state.tabBarVisible })
  //   setState({
  //     ...state,
  //     tabBarVisible: !state.tabBarVisible,
  //   })
  // }

  useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(
      position => {
        const lat = position.coords.latitude
        const long = position.coords.longitude

        const initialRegion = {
          latitude: lat,
          longitude: long,
        }
        const newMarkers = [
          {
            id: 1,
            latitude: lat - 0.003024,
            longitude: long - 0.00499,
          },
          {
            id: 2,
            latitude: lat - 0.000235,
            longitude: long + 0.0029,
          },
          {
            id: 3,
            latitude: lat + 0.002136,
            longitude: long + 0.001013,
          },
        ]
        setState({ ...state, region: initialRegion, markers: newMarkers })
      },
      error => Alert.alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )

    // return function cleanup() {
    //   navigator.geolocation.clearWatch(watchID)
    // }
  })

  const navigation = useNavigation()
  const { region, markers } = state
  // console.log('current location', region)

  const handleDetail = (id: number): void => {
    const markerId = state.markers.findIndex(item => item.id === id)
    const selectedAppointmentDetail = appointmentList.filter(
      item => item.id === id
    )
    // console.log('markerId', markerId)
    // setState({ ...state, selectedMarkerId: id })
    navigation.navigate('AppointmentDetail', {
      SelectedAppointmentRegion: markers[markerId],
      SelectedAppointment: selectedAppointmentDetail[0],
      AppointmentList: appointmentList,
      MarkersRegion: markers,
      SelectedMarkerId: id,
    })
  }

  const handleMarker = (id: number): void => {
    // const newMarkers = state.markers.map(item => {
    //   if (item.id === id) {
    //     return { ...item, selected: !item.selected }
    //   } else {
    //     return item
    //   }
    // })
    // setState({ ...state, markers: newMarkers })
    // setState({ ...state, selectedMarkerId: id })
    handleDetail(id)
  }

  return (
    <LocationContext.Consumer>
      {({ location, setLocation }) => {
        if (state.region !== location) {
          setLocation(state.region)
        }
        return (
          <View style={styles.container}>
            <MapViewer
              region={region}
              markers={markers}
              // selectedMarkerId={state.selectedMarkerId}
              handleMarker={(id: number) => handleMarker(id)}
            />
            <SlidingSheet
              handleDetail={(id: number) => handleDetail(id)}
              appointmentList={appointmentList}
            />
          </View>
        )
      }}
    </LocationContext.Consumer>
  )
}

export default TodayActivityScreen
