import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-dynamic-vector-icons'
import { Region } from 'react-native-maps'
import { useNavigation } from 'react-navigation-hooks'
import SwiperView from '../../../../components/AppointmentDetail'
import MapViewer from '../../../../components/MapView'
import { Theme } from '../../../../theme'

interface State {
  region: IRegion
  selectedMarkerId: number
  appointmentDetail: IAppointmentDetail
  appointmentRegion: IRegion
}

interface IAppointmentDetail {
  id: number
  clientName: string
  date: string
  time: string
  location: string
  departmentName: string
  phoneNumber: string
  totalPayment: number
  estimateTime: number
  duration: number
  payRate: number
  bonus: number
}

interface IRegion {
  latitude: number
  longitude: number
}

const AvailableJobDetail = () => {
  const [state, setState] = useState<State>({
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    appointmentDetail: {
      id: -1,
      clientName: '',
      date: '',
      time: '',
      location: '',
      departmentName: '',
      phoneNumber: '',
      totalPayment: -1,
      estimateTime: -1,
      duration: -1,
      payRate: -1,
      bonus: -1,
    },
    appointmentRegion: {
      latitude: -1,
      longitude: -1,
    },
    selectedMarkerId: -1,
  })
  const navigation = useNavigation()
  const onClsBtnClick = () => {
    navigation.goBack()
  }
  const onDeclineBtnClick = () => {
    navigation.goBack()
  }
  const onAcceptBtnClick = () => {
    navigation.navigate('AvailableJob', { accpeted: true })
  }
  const onRegionChange = (region: Region) => {
    setState({ ...state, region })
  }

  const selectedId = navigation.getParam('selectedId', 'No-Data')
  const markers = navigation.getParam('markers', 'No-Data')
  const appointmentList = navigation.getParam('appointmentList', 'No-Data')

  const selectedMarker = markers.filter((item: any) => {
    if (item.id === selectedId) {
      return item
    }
  })

  const selectedAppointmentRegion = {
    latitude: selectedMarker[0].latitude - 0.0045,
    longitude: selectedMarker[0].longitude,
  }

  const selectedAppointmentDetail = appointmentList.filter((item: any) => {
    if (item.id === selectedId) {
      return item
    }
  })

  useEffect(() => {
    // const ShowRegion = {
    //   latitude: selectedAppointmentRegion.latitude - 0.0045,
    //   longitude: selectedAppointmentRegion.longitude,
    // }

    if (state.selectedMarkerId === -1) {
      setState({ ...state, selectedMarkerId: selectedId })
    }

    if (state.appointmentRegion.latitude === -1) {
      setState({ ...state, appointmentRegion: selectedAppointmentRegion })
    }

    if (state.appointmentDetail.id === -1) {
      setState({ ...state, appointmentDetail: selectedAppointmentDetail[0] })
    }
  })

  const handleMarker = (id: number) => {
    const selectedMarkerDetail = appointmentList.filter((item: any) => {
      if (item.id === id) {
        return item
      }
    })

    const selectedMarkerRegion = markers.filter((item: any) => {
      if (item.id === id) {
        return item
      }
    })
    const showRegion = {
      latitude: selectedMarkerRegion[0].latitude - 0.0045,
      longitude: selectedMarkerRegion[0].longitude,
    }
    setState({
      ...state,
      selectedMarkerId: id,
      appointmentDetail: selectedMarkerDetail[0],
      appointmentRegion: showRegion,
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapViewer
          region={state.appointmentRegion}
          selectedMarkerId={state.selectedMarkerId}
          markers={markers}
          handleMarker={(id: number) => handleMarker(id)}
          // onRegionChange={onRegionChange}
        />
      </View>
      <View style={styles.bottomSheet}>
        <View style={styles.viewWrapper}>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerTxt}>
              {state.appointmentDetail.clientName}
            </Text>
            <TouchableOpacity onPress={() => onClsBtnClick()}>
              <Icon
                name="md-close"
                type="Ionicons"
                style={{ color: '#707070', fontSize: 25 }}
              />
            </TouchableOpacity>
          </View>
          <SwiperView appointmentDetail={state.appointmentDetail} />
        </View>
        <View style={styles.bottomWrapper}>
          <TouchableOpacity
            style={styles.buttonDecline}
            onPress={onDeclineBtnClick}
          >
            <Text style={styles.btnTxt}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAccept}
            onPress={onAcceptBtnClick}
          >
            <Text style={styles.btnTxt}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AvailableJobDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 407 * Theme.Ratio.H,
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
  },

  headerWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 64 * Theme.Ratio.H,
    alignItems: 'center',
    paddingLeft: 24 * Theme.Ratio.H,
    paddingRight: 24 * Theme.Ratio.H,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
  },
  headerTxt: {
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 20 * Theme.Ratio.H,
    color: '#555555',
  },
  viewWrapper: {
    flex: 1,
  },
  bottomWrapper: {
    height: Theme.isIPhoneX ? 70 * Theme.Ratio.H : 64 * Theme.Ratio.H,
    flexDirection: 'row',
  },
  buttonAccept: {
    flex: 1,
    backgroundColor: '#19C73F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDecline: {
    flex: 1,
    backgroundColor: '#E61212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontFamily: Theme.Fonts.MuliSemiBold,
    fontSize: 16 * Theme.Ratio.H,
    color: 'white',
  },
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
})
