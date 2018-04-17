import React, { PureComponent } from 'react'
import { List } from 'antd-mobile'
import Icon from 'react-native-vector-icons/FontAwesome'

const Item = List.Item

class ListItem extends PureComponent {
  render() {
    const { iconName, label, extra } = this.props
    const name = iconName || 'question'
    return (
      <Item
        thumb={
          <Icon name={name} size={15} color='#33f' style={{ width: 30 }} />
        }
        extra={extra}
      >
        {label}
      </Item>
    )
  }
}

export default ListItem
