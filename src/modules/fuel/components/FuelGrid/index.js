import React, { Component } from 'react'
import { Grid, WingBlank } from 'antd-mobile'
import GridItem from './GridItem'

class FuelGrid extends Component {
  constructor(props) {
    super(props)
    this.data = [
      {
        icon: 'plus',
        text: '添加',
        action: this.props.navToAdd(this.props.username)
      },
      {
        icon: 'list-alt',
        text: '查询',
        action: this.props.navToFetch(this.props.username)
      }
    ]
  }

  renderItem = item => <GridItem item={item} />

  render() {
    return (
      <WingBlank>
        <Grid
          data={this.data}
          hasLine={false}
          renderItem={this.renderItem}
        />
      </WingBlank>
    )
  }
}

export default FuelGrid
