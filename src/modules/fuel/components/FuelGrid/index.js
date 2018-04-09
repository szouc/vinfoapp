import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import GridItem from './GridItem'

class FuelGrid extends Component {
  constructor(props) {
    super(props)
    this.data = [
      {
        icon: 'plus',
        text: '添加',
        action: this.props.navToUserAdd
      },
      {
        icon: 'list-alt',
        text: '查询',
        action: this.props.navToUserFetch
      }
    ]
  }

  renderItem = item => <GridItem item={item} />

  render() {
    return (
      <Grid data={this.data} hasLine={false} renderItem={this.renderItem} />
    )
  }
}

export default FuelGrid
