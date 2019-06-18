import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import AppointmentItem from '../../../../components/AppointmentItem'
import { Theme } from '../../../../theme'

// interface IProps {
//   handleSlideView: () => void
// }

interface PItem {
  id: number
  clientName: string
  location: string
  time: string
}

const AppointmentList = (props: any) => {
  // const handleView = (): void => {
  //   props.handleSlideView()
  // }
  // const navigation = useNavigation()
  // const MarkerRegion = navigation.getParam('MarkerRegion', 'ad')
  // console.log('appointmentregion', MarkerRegion)
  // const [state] = useState({
  //   appointmentList: [
  //     {
  //       clientName: 'Appointment Client Name',
  //       location: '7919 Cottage Dr.Meriden, CT 6450',
  //       time: '10:00 AM',
  //     },
  //     {
  //       clientName: 'Appointment Client Name',
  //       location: '7919 Cottage Dr.Meriden, CT 6450',
  //       time: '11:00 AM',
  //     },
  //     {
  //       clientName: 'Appointment Client Name',
  //       location: '7919 Cottage Dr.Meriden, CT 6450',
  //       time: '02:00 AM',
  //     },
  //   ],
  // })

  const { appointmentList } = props

  // console.log('appointmentlist', props)

  const onClickAppointment = (id: number) => {
    props.handleDetail(id)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={appointmentList}
        renderItem={({ item }: { item: PItem }) => (
          <TouchableOpacity onPress={() => onClickAppointment(item.id)}>
            <AppointmentItem
              type="normal"
              clientName={item.clientName}
              location={item.location}
              time={item.time}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

// const SecondView = () => {
//   const { navigate } = useNavigation()
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text onPress={() => navigate('First')}>Second</Text>
//     </View>
//   )
// }

// const BottomSheetStack = createStackNavigator(
//   {
//     First: AppointmentList,
//     Second: SecondView,
//   },
//   {
//     initialRouteName: 'First',
//     headerMode: 'none',
//   }
// )

// const ActivityNav = createAppContainer(BottomSheetStack)

export default AppointmentList

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: 278 * Theme.Ratio.H,
    paddingLeft: 24 * Theme.Ratio.H,
  },
})
