import React from 'react'
import {
  SectionList,
  SectionListData,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Theme } from '../../theme'
import AppointmentItem from '../AppointmentItem'

interface Props {
  sections: Array<SectionListData<any>>
  sectionItemType: string
  appointmentItemType: string
  onClick: (id: number) => void
}

const AppointmentSectionList = (props: Props) => {
  let template = null

  const onClickAppointment = (id: number) => {
    props.onClick(id)
  }

  switch (props.sectionItemType) {
    case 'clickable':
      template = (
        <View style={styles.container}>
          <SectionList
            sections={props.sections}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onClickAppointment(item.id)}>
                <AppointmentItem
                  type={props.appointmentItemType}
                  clientName={item.clientName}
                  location={item.location}
                  time={item.time}
                  expectedPrice={item.expectedPrice}
                />
              </TouchableOpacity>
            )}
            renderSectionHeader={({ section }) => (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{section.title}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )
      break
    case 'unclickable':
      template = (
        <View style={styles.container}>
          <SectionList
            sections={props.sections}
            renderItem={({ item }) => (
              <AppointmentItem
                type={props.appointmentItemType}
                clientName={item.clientName}
                location={item.location}
                time={item.time}
                expectedPrice={item.expectedPrice}
              />
            )}
            renderSectionHeader={({ section }) => (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{section.title}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )
      break
  }

  return template
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24 * Theme.Ratio.H,
  },
  sectionHeader: {
    height: 52 * Theme.Ratio.H,
    paddingTop: 22 * Theme.Ratio.H,
  },
  sectionHeaderText: {
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 14 * Theme.Ratio.H,
    color: '#B7B7B7',
  },
})

export default AppointmentSectionList
