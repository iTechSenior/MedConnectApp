import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Toast from 'react-native-easy-toast'
import { useNavigation } from 'react-navigation-hooks'
import { LocationContext } from '../../../AppContext'
import AppointmentSectionList from '../../../components/AppointmentSectionList'
import { Theme } from '../../../theme'

// sections: Array<SectionListData<any>>

interface ILocation {
  latitude: number
  longitude: number
}

const availableAppointments = [
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
  {
    id: 4,
    clientName: 'Appointment Client Name4',
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
  {
    id: 5,
    clientName: 'Appointment Client Name5',
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
]

const sections = [
  {
    key: 'id1',
    title: 'MONDAY 13, MAY',
    data: [
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
    ],
  },
  {
    key: 'id2',
    title: 'MONDAY 14, MAY',
    data: [
      {
        id: 4,
        clientName: 'Appointment Client Name4',
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
      {
        id: 5,
        clientName: 'Appointment Client Name5',
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
    ],
  },
]

const AvailableJobScreen = () => {
  // const [state, setState] = useState({
  //   region: {
  //     latitude: 0,
  //     longitude: 0,
  //   },
  //   markers: [
  //     {
  //       id: 1,
  //       latitude: 37.78281,
  //       longitude: -122.401427,
  //     },
  //     {
  //       id: 2,
  //       latitude: 37.785599,
  //       longitude: -122.409317,
  //     },
  //     {
  //       id: 3,
  //       latitude: 37.78797,
  //       longitude: -122.40743,
  //     },
  //     {
  //       id: 4,
  //       latitude: 37.785599,
  //       longitude: -122.409317,
  //     },
  //     {
  //       id: 5,
  //       latitude: 37.78797,
  //       longitude: -122.40743,
  //     },
  //   ],
  //   selectedMarkerId: -1,
  // })

  // useEffect(() => {
  //   const watchID = navigator.geolocation.watchPosition(
  //     position => {
  //       const lat = position.coords.latitude
  //       const long = position.coords.longitude

  //       const initialRegion = {
  //         latitude: lat,
  //         longitude: long,
  //       }
  //       const newMarkers = [
  //         {
  //           id: 1,
  //           latitude: lat - 0.003024,
  //           longitude: long - 0.00499,
  //         },
  //         {
  //           id: 2,
  //           latitude: lat - 0.000235,
  //           longitude: long + 0.0029,
  //         },
  //         {
  //           id: 3,
  //           latitude: lat + 0.002136,
  //           longitude: long + 0.001013,
  //         },
  //         {
  //           id: 4,
  //           latitude: lat - 0.002136,
  //           longitude: long + 0.001013,
  //         },
  //         {
  //           id: 5,
  //           latitude: lat + 0.002136,
  //           longitude: long - 0.001013,
  //         },
  //       ]
  //       // console.log('markers', newMarkers)
  //       setState({ ...state, region: initialRegion, markers: newMarkers })
  //     },
  //     error => Alert.alert(JSON.stringify(error)),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   )
  // })

  const navigation = useNavigation()
  const toast = React.createRef()

  const handleAvailableJobDetail = (id: number, location: ILocation) => {
    const lat = location.latitude
    const long = location.longitude

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
      {
        id: 4,
        latitude: lat - 0.002136,
        longitude: long + 0.001013,
      },
      {
        id: 5,
        latitude: lat + 0.002136,
        longitude: long - 0.001013,
      },
    ]
    navigation.navigate('AvailableJobDetail', {
      selectedId: id,
      markers: newMarkers,
      appointmentList: availableAppointments,
    })
  }

  const showAlert = () => {
    if (navigation.getParam('accpeted')) {
      // console.log('toast ref', toastRef)
    }
  }

  let toastRef: any = null
  return (
    <LocationContext.Consumer>
      {({ location, setLocation }) => {
        return (
          <View style={styles.container}>
            <Text style={styles.headerText}>Available Jobs</Text>
            <AppointmentSectionList
              sectionItemType="clickable"
              sections={sections}
              appointmentItemType="normal"
              onClick={(id: number) => handleAvailableJobDetail(id, location)}
            />
            <Toast ref={x => (toastRef = x)} />
            {showAlert()}
          </View>
        )
      }}
    </LocationContext.Consumer>
  )
}

export default AvailableJobScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 62 * Theme.Ratio.H,
  },
  headerText: {
    paddingLeft: 24 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#0C72AD',
  },
})
