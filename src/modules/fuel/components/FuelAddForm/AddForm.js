import React from 'react'
import VehiclePickerField from '../VehiclePickerField'
import { InputItemField } from '../../../shared'
import { reduxForm, Field } from 'redux-form/immutable'
import { List, WingBlank, WhiteSpace, Button } from 'antd-mobile'

const validate = values => {
  const errors = {}
  if (!values.get('litre')) {
    errors.litre = '必填'
  }
  if (!values.get('cost')) {
    errors.cost = '必填'
  }
  if (!values.get('mile')) {
    errors.mile = '必填'
  }
  return errors
}

class FuelAddForm extends React.PureComponent {
  render() {
    const { vehicles, handleSubmit, onSubmit } = this.props
    return (
      <WingBlank>
        <List renderHeader={() => '新增加油记录'}>
          <Field name='applicant' component={() => null} />
          <VehiclePickerField name='vehicleId' data={vehicles} label='车辆' />
          <InputItemField
            name='litre'
            type='number'
            placeholder='请输入加油升数'
            label='升数'
          />
          <InputItemField
            name='cost'
            type='number'
            extra='¥'
            placeholder='请输入加油开销'
            label='费用'
          />
          <InputItemField
            name='mile'
            type='number'
            placeholder='请输入当前里程'
            label='里程'
          />
        </List>
        <WhiteSpace />
        <Button onClick={handleSubmit(onSubmit)}>提交</Button>
      </WingBlank>
    )
  }
}

export default reduxForm({
  form: 'FuelAddForm',
  validate
})(FuelAddForm)