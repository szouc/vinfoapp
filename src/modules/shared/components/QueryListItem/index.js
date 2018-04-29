import React, { PureComponent } from 'react'
import { List } from 'antd-mobile'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text } from 'react-native'

const Item = List.Item

class ListItem extends PureComponent {
  render() {
    const { iconName, label, extra } = this.props
    const name = iconName || 'question'
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Item
          wrap
          thumb={
            <Icon name={name} size={15} color='#33f' style={{ width: 30 }} />
          }
          extra={<Text style={{ flex: 2 }}>{extra}</Text>}
        >
          {label}
        </Item>
      </View>
    )
  }
}

export default ListItem
