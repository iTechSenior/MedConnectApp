import * as React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import posed from 'react-native-pose'
import { useNavigation, useNavigationState } from 'react-navigation-hooks'
import { Theme } from '../../theme'
import CustomTabBarItem from './CustomTabBarItem'

const SpotLight = posed.View({
  route0: { x: 24 * Theme.Ratio.H },
  route1: { x: 134 * Theme.Ratio.H },
  route2: { x: 200 * Theme.Ratio.H },
})

const CustomTabBar = () => {
  const { navigate } = useNavigation()
  const routes = useNavigationState().routes
  const navigationState = useNavigationState()
  const { index: activeRouteIndex } = navigationState

  return (
    <SafeAreaView style={{ backgroundColor: 'blue' }}>
      <View style={styles.container}>
        <View style={styles.spotLightWrapper}>
          <SpotLight
            style={styles.spotLight}
            pose={`route${activeRouteIndex}`}
          />
        </View>
        {routes.map(
          (
            route: { key: string | number | undefined; routeName: string },
            index: number
          ) => {
            return (
              <View key={index} style={styles.tabBarItem}>
                <CustomTabBarItem
                  key={route.key}
                  routeName={route.routeName}
                  onPress={() => navigate(route.routeName)}
                  focused={navigationState.index === index}
                  index={index}
                />
              </View>
            )
          }
        )}
      </View>
    </SafeAreaView>
  )
}

export default CustomTabBar

// export default class CustomTabBar extends React.Component<
//   NavigationScreenProps,
//   State
// > {
//   constructor(props: NavigationScreenProps) {
//     super(props)
//     // this.state = {
//     //   routeFirstWidth: 0,
//     //   routeSecondWidth: 0,
//     //   routeThirdWidth: 0,
//     // }
//   }

//   FirstPos: number = 24 * Theme.Ratio.H

//   SpotLight = posed.View({
//     route0: { x: 24 * Theme.Ratio.H },
//     route1: { x: 134 * Theme.Ratio.H },
//     route2: { x: 200 * Theme.Ratio.H },
//   })

//   // find_dimensions = (layout: LayoutRectangle, index: number) => {
//   //   const { x } = layout
//   //   switch (index) {
//   //     case 0:
//   //       this.setState({ routeFirstWidth: x })
//   //       break
//   //     case 1:
//   //       this.setState({ routeSecondWidth: x })
//   //       break
//   //     case 2:
//   //       this.setState({ routeThirdWidth: x })
//   //       break
//   //   }
//   // }

//   render() {
//     const { navigation } = this.props
//     const routes = navigation.state.routes
//     const { index: activeRouteIndex } = navigation.state

//     return (
//       <SafeAreaView style={{ backgroundColor: 'blue' }}>
//         <View style={styles.container}>
//           <View style={styles.spotLightWrapper}>
//             <this.SpotLight
//               style={styles.spotLight}
//               pose={`route${activeRouteIndex}`}
//             />
//           </View>
//           {routes.map((route, index) => {
//             return (
//               <View
//                 // onLayout={event => {
//                 //   this.find_dimensions(event.nativeEvent.layout, index)
//                 // }}
//                 key={index}
//                 style={styles.tabBarItem}
//               >
//                 <CustomTabBarItem
//                   key={route.key}
//                   routeName={route.routeName}
//                   onPress={() => this.navigationHandler(route.routeName)}
//                   focused={navigation.state.index === index}
//                   index={index}
//                 />
//               </View>
//             )
//           })}
//         </View>
//       </SafeAreaView>
//     )
//   }

//   navigationHandler = (routeName: any) => {
//     this.props.navigation.navigate(routeName)
//   }
// }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    height: 33 * Theme.Ratio.H,
    width: '100%',
    paddingLeft: 24 * Theme.Ratio.H,
    backgroundColor: 'white',
  },
  spotLightWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 29 * Theme.Ratio.H,
    bottom: 0,
  },
  tabBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 32 * Theme.Ratio.H,
  },

  spotLight: {
    width: 30 * Theme.Ratio.H,
    height: 4 * Theme.Ratio.H,
    backgroundColor: '#0C72AD',
    borderRadius: 8,
  },
})
