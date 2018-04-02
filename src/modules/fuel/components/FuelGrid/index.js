import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import GridItem from './GridItem'

class FuelGrid extends Component {
  constructor(props) {
    super(props)
    this.data = [
      {
        icon:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: '添加',
        action: this.props.navToAdd(this.props.username)
      },
      {
        icon:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: '查询',
        action: this.props.navToFetch(this.props.username)
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