import React from 'react'
import { PickerField } from '../../../shared'

class VehiclePickerField extends React.PureComponent {
  getVehicleFromPicker = value => {
    return value ? value[0] : ''
  }
  setVehicleToPicker = value => {
    return value ? [value] : []
  }

  render() {
    const { ...rest } = this.props
    return (
      <PickerField
        cols={1}
        format={this.setVehicleToPicker}
        parse={this.getVehicleFromPicker}
        {...rest}
      />
    )
  }
}

export default VehiclePickerField
