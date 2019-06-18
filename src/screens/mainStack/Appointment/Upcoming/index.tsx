import React, { useState } from 'react'
import { SectionListData, View } from 'react-native'
import AppointmentSectionList from '../../../../components/AppointmentSectionList'
import { Theme } from '../../../../theme'

interface State {
  sections: Array<SectionListData<any>>
}

const UpcomingScreen = () => {
  const [state] = useState<State>({
    sections: [
      {
        title: 'MONDAY 13, MAY',
        data: [
          {
            clientName: 'Appointment Client Name',
            location: '7919 Cottage Dr.Meriden, CT 6450',
            time: '10:00 AM',
            expectedPrice: 120,
          },
          {
            clientName: 'Appointment Client Name',
            location: '7919 Cottage Dr.Meriden, CT 6450',
            time: '11:00 AM',
            expectedPrice: 120,
          },
        ],
      },
    ],
  })

  const { sections } = state

  return (
    <View style={{ paddingTop: 10 * Theme.Ratio.H }}>
      <AppointmentSectionList
        sectionItemType="unclickable"
        sections={sections}
        appointmentItemType="accepted"
      />
    </View>
  )
}

export default UpcomingScreen
