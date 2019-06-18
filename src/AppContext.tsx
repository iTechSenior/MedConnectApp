import React, { useEffect, useRef, useState } from 'react'
import {
  Alert,
  Animated,
  Easing,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export const LocationContext = React.createContext({
  location: { latitude: 0, longitude: 0 },
  setLocation: location => {
    console.log(location)
  },
})
