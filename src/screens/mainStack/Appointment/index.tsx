import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import AppointmentNavigator from '../../../navigation/mainNavigator/appointmentNavigator/appointmentNav'
import { Theme } from '../../../theme'

const AppointmentNavScreen = () => {
  const navigation = useNavigation()
  console.log('apoint', navigation)
  return <AppointmentNavigator navigation={navigation} />
}

AppointmentNavScreen.navigationOptions = {
  header: () => <CustomHeader />,
}
AppointmentNavScreen.router = AppointmentNavigator.router
export default AppointmentNavScreen

const CustomHeader = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerTitle}>All My Appointment</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerView: {
    height: 126 * Theme.Ratio.H,
    paddingTop: 63 * Theme.Ratio.H,
    color: 'white',
    paddingLeft: 24 * Theme.Ratio.H,
    backgroundColor: 'white',
  },
  headerTitle: {
    color: '#0C72AD',
    fontSize: 24 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.MuliBold,
  },
})
