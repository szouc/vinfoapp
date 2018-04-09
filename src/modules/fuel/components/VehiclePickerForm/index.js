import React from 'react'
import { List, Picker, WingBlank } from 'antd-mobile'

class DefaultVehiclePicker extends React.PureComponent {
  componentDidMount() {
    this.props.getDriverVehicles(this.props.username)
  }

  render() {
    const { vehicles } = this.props
    return (
      <WingBlank>
        <List renderHeader={() => '选择默认车辆'}>
          <Picker data={vehicles} cols={1} onOk={this.props.setVehicleRequest}>
            <List.Item arrow='horizontal'>默认车辆</List.Item>
          </Picker>
        </List>
      </WingBlank>
    )
  }
}

export default DefaultVehiclePicker
