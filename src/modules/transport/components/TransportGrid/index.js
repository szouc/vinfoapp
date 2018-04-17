import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import { GridItem } from '../../../shared'

class TransportGrid extends Component {
  constructor(props) {
    super(props)
    this.data = [
      {
        icon: 'check-square',
        text: '接单',
        action: this.props.navToAccept
      },
      {
        icon: 'upload',
        text: '提交',
        action: this.props.navToActive
      },
      {
        icon: 'list-alt',
        text: '查询',
        action: this.props.navToList
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

export default TransportGrid
