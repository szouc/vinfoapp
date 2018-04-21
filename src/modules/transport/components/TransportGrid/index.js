import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { Grid, Badge } from 'antd-mobile'
import { GridItem } from '../../../shared'

class TransportGrid extends PureComponent {
  constructor(props) {
    super(props)
  }

  renderItem = item => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Badge text={item.badge}>
          <GridItem item={item} />
        </Badge>
      </View>
    )
  }

  render() {
    return (
      <Grid data={this.props.data} hasLine={false} renderItem={this.renderItem} />
    )
  }
}

export default TransportGrid
