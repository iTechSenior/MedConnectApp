import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Theme } from '../../theme'

interface Props {
  label: string
  value: string
}

const AccountItemDetail = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.itemLabel}>{props.label}</Text>
        <Text style={styles.itemValue}>{props.value}</Text>
      </View>
    </View>
  )
}

export default AccountItemDetail

const styles = StyleSheet.create({
  container: {
    height: 64 * Theme.Ratio.H,
    paddingLeft: 24 * Theme.Ratio.H,
  },
  wrapper: {
    height: '100%',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
  },
  itemLabel: {
    fontSize: 14 * Theme.Ratio.H,
    color: '#B7B7B7',
  },
  itemValue: {
    marginTop: 7 * Theme.Ratio.H,
    fontSize: 16 * Theme.Ratio.H,
    color: '#555555',
  },
})
