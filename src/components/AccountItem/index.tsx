import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Theme } from '../../theme'

interface Props {
  text: string
}

const AccountItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.clientName}>{props.text}</Text>
      <Image
        style={styles.angleImage}
        source={require('../../assets/Icons/IOS/PNG/arrow-right.png')}
      />
    </View>
  )
}

export default AccountItem

const styles = StyleSheet.create({
  container: {
    height: 64 * Theme.Ratio.H,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
    paddingRight: 24 * Theme.Ratio.H,
    alignItems: 'center',
  },
  clientName: {
    fontSize: 16 * Theme.Ratio.H,
    color: '#555555',
  },
  angleImage: {
    width: 7 * Theme.Ratio.H,
    height: 12 * Theme.Ratio.H,
  },
})
