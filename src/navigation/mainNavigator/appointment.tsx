import React from 'react'
import { Image, View } from 'react-native'
import {
  createStackNavigator,
  NavigationScreenProps,
  TabScene,
} from 'react-navigation'
import AppointmentScreen from '../../screens/mainStack/Appointment'
import { Theme } from '../../theme'

const AppointmentStack = createStackNavigator(
  {
    Appointment: { screen: AppointmentScreen },
  },
  {
    initialRouteName: 'Appointment',
  }
)
AppointmentStack.navigationOptions = ({
  navigation,
}: NavigationScreenProps) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarIcon: ({ focused }: TabScene) => (
      <View>
        <Image
          style={{ width: 19 * Theme.Ratio.H, height: 22 * Theme.Ratio.H }}
          source={
            focused
              ? require('../../assets/Icons/IOS/PNG/copyActive.png')
              : require('../../assets/Icons/IOS/PNG/copy.png')
          }
        />
      </View>
    ),
    tabBarVisible,
  }
}

export default AppointmentStack
