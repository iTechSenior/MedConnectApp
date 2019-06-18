import React from 'react'
import { Image, View } from 'react-native'
import {
  createStackNavigator,
  NavigationScreenProps,
  TabScene,
} from 'react-navigation'
import TodayActivityScreen from '../../screens/mainStack/TodayActivity'
import AppointmentDetailScreen from '../../screens/mainStack/TodayActivity/AppointmentDetailScreen'
import { Theme } from '../../theme'

const TodayActivityStack = createStackNavigator(
  {
    TodayActivity: TodayActivityScreen,
    AppointmentDetail: AppointmentDetailScreen,
  },
  {
    initialRouteName: 'TodayActivity',
    headerMode: 'none',
  }
)

TodayActivityStack.navigationOptions = ({
  navigation,
}: NavigationScreenProps) => {
  // const { state } = navigation
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  // const tabBarVisible = state.routes[state.index].params
  //   ? state.routes[state.index].params!.tabBarVisible
  //   : true

  return {
    tabBarIcon: ({ focused }: TabScene) => (
      <View>
        <Image
          style={{ width: 20 * Theme.Ratio.H, height: 18 * Theme.Ratio.H }}
          source={
            focused
              ? require('../../assets/Icons/IOS/PNG/mapActive.png')
              : require('../../assets/Icons/IOS/PNG/map.png')
          }
        />
      </View>
    ),
    tabBarVisible,
  }
}

export default TodayActivityStack
