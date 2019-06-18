import moment from 'moment'
import React, { useState } from 'react'
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-dynamic-vector-icons'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'
import AccountItemDetail from '../../../../components/AccountItemDetail'
import { Theme } from '../../../../theme'

const DetailsScreen = () => {
  const [state, setState] = useState({
    profile: [
      {
        label: 'Name',
        value: 'Jaxon Clarke',
      },
      {
        label: 'Email',
        value: 'jaxonclarke202@gmail.com',
      },
      {
        label: 'Cell',
        value: '+1-202-555-0169',
      },
      {
        label: 'Alt Phone',
        value: '+1-202-555-0162',
      },
    ],
    address: [
      {
        label: 'Address',
        value: '7579 Railroad Ave. Fairport, NY 14450',
      },
      {
        label: 'City',
        value: 'New York',
      },
      {
        label: 'State',
        value: 'Buffalo',
      },
      {
        label: 'ZIP',
        value: '14201',
      },
    ],
    availability: [
      { weekday: 'Sunday', timeFrom: '', timeTo: '' },
      { weekday: 'Monday', timeFrom: '', timeTo: '' },
      { weekday: 'Tuesday', timeFrom: '', timeTo: '' },
      { weekday: 'Wednesday', timeFrom: '', timeTo: '' },
      { weekday: 'Thursday', timeFrom: '', timeTo: '' },
      { weekday: 'Friday', timeFrom: '', timeTo: '' },
      { weekday: 'Saturday', timeFrom: '', timeTo: '' },
    ],
    isFromDateTimePickerVisible: false,
    isToDateTimePickerVisible: false,
    switchValue: false,
    currentDay: '',
  })

  const showFromDateTimePicker = (weekday: any) => {
    setState({
      ...state,
      isFromDateTimePickerVisible: true,
      currentDay: weekday,
    })
  }
  const hideFromDateTimePicker = () => {
    setState({
      ...state,
      isFromDateTimePickerVisible: false,
    })
  }

  const handleFromDatePicked = (date: Date) => {
    const timeFrom = moment(date).format('h:mm A')
    const updatedAvailability = state.availability.map(item => {
      if (item.weekday === state.currentDay) {
        item.timeFrom = timeFrom
      }
      return item
    })
    setState({ ...state, availability: updatedAvailability })
    setState({
      ...state,
      isFromDateTimePickerVisible: false,
      isToDateTimePickerVisible: true,
    })
  }

  const hideToDateTimePicker = () => {
    setState({
      ...state,
      isToDateTimePickerVisible: false,
    })
  }

  const handleToDatePicked = (date: Date) => {
    const timeTo = moment(date).format('h:mm A')
    const updatedAvailability = state.availability.map(item => {
      if (item.weekday === state.currentDay) {
        item.timeTo = timeTo
      }
      return item
    })
    setState({
      ...state,
      availability: updatedAvailability,
      isFromDateTimePickerVisible: false,
      isToDateTimePickerVisible: false,
    })
  }

  const toggleSwitch = (value: boolean) => {
    setState({ ...state, switchValue: value })
  }

  const headerTitle = useNavigationParam('title')

  let template = null

  switch (headerTitle) {
    case 'Profile':
      template = state.profile.map((item, i) => (
        <AccountItemDetail key={i} label={item.label} value={item.value} />
      ))
      break
    case 'Address':
      template = state.address.map((item, i) => (
        <AccountItemDetail key={i} label={item.label} value={item.value} />
      ))
      break
    case 'Availability':
      template = (
        <View>
          {state.availability.map((item, i) => (
            <View key={i}>
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => showFromDateTimePicker(item.weekday)}
                >
                  <Text style={styles.dayLabel}>{item.weekday}</Text>
                  <Text style={styles.timeLabel}>
                    {item.timeFrom !== '' && item.timeTo !== ''
                      ? `${item.timeFrom + '-' + item.timeTo}`
                      : 'None'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          {state.isFromDateTimePickerVisible && (
            <DateTimePicker
              mode="time"
              titleIOS="Pick 'From' Time"
              isVisible={state.isFromDateTimePickerVisible}
              onConfirm={(date: Date) => handleFromDatePicked(date)}
              onCancel={() => hideFromDateTimePicker()}
            />
          )}
          {state.isToDateTimePickerVisible && (
            <DateTimePicker
              mode="time"
              titleIOS="Pick 'To' Time"
              isVisible={state.isToDateTimePickerVisible}
              onConfirm={(date: Date) => handleToDatePicked(date)}
              onCancel={() => hideToDateTimePicker()}
            />
          )}
          <View style={styles.holidayItemContainer}>
            <View style={styles.holidayItem}>
              <Text style={styles.dayLabel}>Holiday Availability</Text>
              <Switch
                trackColor={{ true: '#0C72AD', false: 'lightgray' }}
                onValueChange={value => toggleSwitch(value)}
                value={state.switchValue}
              />
            </View>
          </View>
        </View>
      )
      break
  }

  return template
}

// DetailsScreen.navigationOptions = (props: any) => {
//   return {
//     title: props.navigation.getParam('title'),
//     headerTintColor: 'red',
//     headerTitleStyle: {
//       color: '#0C72AD',
//       fontFamily: Theme.Fonts.MuliBold,
//       fontSize: 20 * Theme.Ratio.H,
//     },
//     headerLeft: <Icon name="ios-arrow-back" />,
//     headerStyle: {
//       height: 99,
//       shadowColor: 'transparent',
//       shadowRadius: 0,
//       shadowOffset: {
//         height: 0,
//       },
//     },
//     headerRight: <Button title="+1" color="#fff" />,
//   }
// }
const CustomHeader = (props: any) => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.headerView}>
      <TouchableOpacity
        onPress={() => navigate('AccountSetting')}
        style={styles.arrowIconWrapper}
      >
        <Icon name="angle-left" type="FontAwesome" style={styles.arrowIcon} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>
        {props.navigation.getParam('title')}
      </Text>
    </View>
  )
}

DetailsScreen.navigationOptions = (props: any) => {
  return {
    header: <CustomHeader {...props} />,
  }
}

export default DetailsScreen

const styles = StyleSheet.create({
  holidayItemContainer: {
    height: 64 * Theme.Ratio.H,
    paddingLeft: 24 * Theme.Ratio.H,
    justifyContent: 'center',
    marginTop: 22 * Theme.Ratio.H,
  },
  itemContainer: {
    height: 64 * Theme.Ratio.H,
    paddingLeft: 24 * Theme.Ratio.H,
    justifyContent: 'center',
  },
  holidayItem: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 24 * Theme.Ratio.H,
    borderTopWidth: 1,
    borderTopColor: '#F1F3F8',
  },
  item: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 24 * Theme.Ratio.H,
    borderTopWidth: 1,
    borderTopColor: '#F1F3F8',
  },
  dayLabel: {
    fontSize: 16 * Theme.Ratio.H,
    color: '#555555',
  },
  timeLabel: {
    fontWeight: 'bold',
    fontSize: 16 * Theme.Ratio.H,
    color: '#555555',
  },
  headerView: {
    height: 99 * Theme.Ratio.H,
    backgroundColor: 'white',
    paddingTop: 49 * Theme.Ratio.H,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
  },
  headerTitle: {
    color: '#0C72AD',
    fontSize: 20 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.MuliBold,
  },
  arrowIcon: {
    color: '#BCBCBC',
    fontSize: 35,
  },
  arrowIconWrapper: {
    position: 'absolute',
    left: 20 * Theme.Ratio.H,
    top: 45 * Theme.Ratio.H,
  },
})
