import React from 'react'
import { Image, View } from 'react-native'
import {
  createStackNavigator,
  NavigationScreenProps,
  TabScene,
} from 'react-navigation'
import AccountSettingScreen from '../../screens/mainStack/AccountSetting'
import DetailsScreen from '../../screens/mainStack/AccountSetting/DetailsScreen'
import { Theme } from '../../theme'

const accountSettingStack = createStackNavigator(
  {
    AccountSetting: { screen: AccountSettingScreen },
    Details: { screen: DetailsScreen },
  },
  {
    initialRouteName: 'AccountSetting',
  }
)
accountSettingStack.navigationOptions = ({
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
          style={{ width: 21 * Theme.Ratio.H, height: 21 * Theme.Ratio.H }}
          source={
            focused
              ? require('../../assets/Icons/IOS/PNG/cogActive.png')
              : require('../../assets/Icons/IOS/PNG/cog.png')
          }
        />
      </View>
    ),
    tabBarVisible,
  }
}

export default accountSettingStack
