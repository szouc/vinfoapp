import React from 'react'
import { List, Picker, WingBlank } from 'antd-mobile'

class DefaultVehiclePicker extends React.PureComponent {
  componentDidMount() {
    this.props.getUserVehicles()
  }

  render() {
    const { currentVehicle, vehicles, setVehicle } = this.props
    return (
      <WingBlank>
        <List renderHeader={() => '选择默认车辆'}>
          <Picker
            data={vehicles}
            value={[currentVehicle._id]}
            cols={1}
            onOk={setVehicle}
          >
            <List.Item arrow='horizontal'>当前默认车辆</List.Item>
          </Picker>
        </List>
      </WingBlank>
    )
  }
}

export default DefaultVehiclePicker
