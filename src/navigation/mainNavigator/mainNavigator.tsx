import { createBottomTabNavigator } from 'react-navigation'
import AccountSettingNav from './accountSetting'
import AppointmentNav from './appointment'
import AvailableJobNav from './availableJobs'
import TodayActivityNav from './todayActivity'

import { Theme } from '../../theme'

const MainNavigator = createBottomTabNavigator(
  {
    todayActivity: TodayActivityNav,
    availableJobs: AvailableJobNav,
    appointment: AppointmentNav,
    account: AccountSettingNav,
  },
  {
    initialRouteName: 'todayActivity',
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#0B71AC',
        height: Theme.isIPhoneX ? 80 * Theme.Ratio.H : 64 * Theme.Ratio.H,
      },
      safeAreaInset: { bottom: 'never', top: 'never' },
    },
  }
)

export default MainNavigator
