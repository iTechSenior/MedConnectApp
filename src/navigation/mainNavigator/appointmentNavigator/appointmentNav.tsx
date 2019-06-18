import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import CustomTabBar from '../../../components/AppointmentCustomTabBar'
import DeclinedScreen from '../../../screens/mainStack/Appointment/Declined'
import PastScreen from '../../../screens/mainStack/Appointment/Past'
import UpcomingScreen from '../../../screens/mainStack/Appointment/Upcoming'

const AppointmentNav = createMaterialTopTabNavigator(
  {
    Upcoming: { screen: UpcomingScreen },
    Past: { screen: PastScreen },
    Declined: { screen: DeclinedScreen },
  },
  {
    tabBarComponent: () => <CustomTabBar />,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      showIcon: false,
      showLabel: true,
      style: {
        backgroundColor: 'white',
      },
    },
  }
)

export default AppointmentNav
