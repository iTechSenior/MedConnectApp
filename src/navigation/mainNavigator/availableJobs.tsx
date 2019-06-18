import React from 'react'
import { Image, View } from 'react-native'
import {
  createStackNavigator,
  NavigationScreenProps,
  TabScene,
} from 'react-navigation'
import AvailableJobScreen from '../../screens/mainStack/AvailableJobs'
import AvailableJobDetailScreen from '../../screens/mainStack/AvailableJobs/AvailableJobDetail'
import { Theme } from '../../theme'

const AvailableJobStack = createStackNavigator(
  {
    AvailableJob: { screen: AvailableJobScreen },
    AvailableJobDetail: { screen: AvailableJobDetailScreen },
  },
  {
    initialRouteName: 'AvailableJob',
    headerMode: 'none',
  }
)

AvailableJobStack.navigationOptions = ({
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
          style={{ width: 20 * Theme.Ratio.H, height: 20 * Theme.Ratio.H }}
          source={
            focused
              ? require('../../assets/Icons/IOS/PNG/searchActive.png')
              : require('../../assets/Icons/IOS/PNG/search.png')
          }
        />
      </View>
    ),
    tabBarVisible,
  }
}

export default AvailableJobStack
