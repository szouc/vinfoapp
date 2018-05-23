import React from 'react'
import VehiclePickerField from '../VehiclePickerField'
import { InputItemField } from '../../../shared'
import { reduxForm, Field } from 'redux-form/immutable'
import {
  List,
  WingBlank,
  WhiteSpace,
  Button,
  ActivityIndicator
} from 'antd-mobile'

const validate = values => {
  const errors = {}
  const checkKeys = ['applicant', 'vehicleId', 'reason', 'cost', 'mile']
  checkKeys.map(key => {
    if (!values.get(key)) {
      errors[key] = '必填'
    }
  })
  return errors
}

class AddForm extends React.PureComponent {
  render() {
    const { vehicles, handleSubmit, onSubmit } = this.props
    return (
      <WingBlank>
        <ActivityIndicator
          toast
          text='提交中...'
          animating={this.props.loading}
        />
        <List renderHeader={() => '新增维修记录'}>
          <Field name='applicant' component={() => null} />
          <Field name='fullname' component={() => null} />
          <VehiclePickerField name='vehicleId' data={vehicles} label='车辆' />
          <InputItemField
            name='reason'
            placeholder='请输入维修原因'
            label='原因'
          />
          <InputItemField
            name='cost'
            type='number'
            extra='¥'
            placeholder='请输入维修开销'
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
  form: 'MaintainAddForm',
  validate
})(AddForm)
