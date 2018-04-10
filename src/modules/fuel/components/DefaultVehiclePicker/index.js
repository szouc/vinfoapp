import React from 'react'
import { List, Picker } from 'antd-mobile'

class DefaultVehiclePicker extends React.PureComponent {
  render() {
    const { currentVehicle, vehicles, setVehicle } = this.props
    return (
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
    )
  }
}

export default DefaultVehiclePicker
