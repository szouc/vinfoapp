import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import { GridItem } from '../../../shared'

class MaintainGrid extends Component {
  constructor(props) {
    super(props)
    this.data = [
      {
        icon: 'plus',
        text: '添加',
        action: this.props.navToAdd
      },
      {
        icon: 'list-alt',
        text: '查询',
        action: this.props.navToFetch
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

export default MaintainGrid
