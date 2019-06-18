import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import AccountItem from '../../../components/AccountItem'
import styles from './styles'

interface State {
  settingsList: SettingListItem[]
}

interface SettingListItem {
  id: number
  key: string
}

const AccountSettingScreen = () => {
  const [state] = useState<State>({
    settingsList: [
      {
        id: 1,
        key: 'Profile',
      },
      {
        id: 2,
        key: 'Address',
      },
      {
        id: 3,
        key: 'Availability',
      },
    ],
  })
  const { navigate } = useNavigation()
  const { settingsList } = state

  const handleItemClick = (key: string) => {
    navigate('Details', { title: key })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/Icons/IOS/PNG/star-f.png')}
        />
        <Text style={styles.userName}>Jaxon Clarke</Text>
        <View style={styles.starImgWrapper}>
          <Image
            style={styles.starImg}
            source={require('../../../assets/Icons/IOS/PNG/star-f.png')}
          />
          <Image
            style={styles.starImg}
            source={require('../../../assets/Icons/IOS/PNG/star-f.png')}
          />
          <Image
            style={styles.starImg}
            source={require('../../../assets/Icons/IOS/PNG/star-half.png')}
          />
          <Image
            style={styles.starImg}
            source={require('../../../assets/Icons/IOS/PNG/star.png')}
          />
        </View>
      </View>

      <View style={styles.listWrapper}>
        {settingsList.map((item: SettingListItem, id: number) => (
          <TouchableOpacity key={id} onPress={key => handleItemClick(item.key)}>
            <AccountItem key={id} text={item.key} />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.logoutBtn} onPress={() => navigate('Login')}>
        Log out
      </Text>
    </SafeAreaView>
  )
}

AccountSettingScreen.navigationOptions = {
  header: null,
}

export default AccountSettingScreen
