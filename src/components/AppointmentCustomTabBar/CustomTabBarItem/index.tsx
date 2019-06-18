import * as React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Theme } from '../../../theme'

interface Props {
  index: number
  focused: boolean
  routeName: string
  onPress: any
}

const CustomTabBarIcon = (props: Props) => {
  const onSelect = (routeTo: string) => {
    props.onPress(routeTo)
  }

  const { focused, routeName } = props
  return (
    <TouchableWithoutFeedback onPress={() => onSelect(routeName)}>
      <View style={styles.container}>
        <Text
          style={[
            styles.textStyle,
            focused ? styles.textActive : styles.textStyle,
          ]}
        >
          {routeName}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CustomTabBarIcon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // active: {
  //   borderBottomWidth: 3,
  //   borderColor: '#0C72AD',
  // },
  // inactive: {
  //   borderBottomWidth: 3,
  //   borderColor: 'white',
  // },
  textActive: {
    color: '#555555',
  },
  textStyle: {
    fontFamily: Theme.Fonts.MuliBold,
    color: '#B7B7B7',
    fontSize: 16 * Theme.Ratio.H,
  },
})
