import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Grid } from 'antd-mobile'
import { NavigationActions } from 'react-navigation'

const data = [
  { text: '添加', action: 'FuelAdd' },
  { text: '查询', action: 'FuelFetch' }
].map(item => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: item.text,
  action: item.action
}))

class ListItem extends React.PureComponent {
  render() {
    const { item, navToScreen } = this.props
    return (
      <View>
        <TouchableOpacity onPress={navToScreen(item.action)}>
          <Image source={{ uri: item.icon }} />
          <Text>{item.text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class FuelMainScreen extends Component {
  navToScreen = action => () => {
    return this.props.navigation.dispatch(
      NavigationActions.navigate({ routeName: action })
    )
  }

  renderItem = item => <ListItem navToScreen={this.navToScreen} item={item} />

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Fuel</Text>
        <Grid data={data} hasLine={false} renderItem={this.renderItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f'
  },

  title: {
    fontWeight: '800'
  }
})

export default FuelMainScreen
