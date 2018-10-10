import React from 'react'
import VehiclePickerField from '../VehiclePickerField'
import { InputItemField, UploadImageField } from '../../../shared'
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
  const checkKeys = ['applicant', 'vehicleId', 'litre', 'cost', 'mile']
  checkKeys.map(key => {
    if (!values.get(key)) {
      errors[key] = '必填'
    }
  })
  return errors
}

class FuelAddForm extends React.PureComponent {
  render() {
    const { vehicles, handleSubmit, onSubmit, uploadUrl } = this.props
    return (
      <WingBlank>
        <ActivityIndicator
          toast
          text='提交中...'
          animating={this.props.loading}
        />
        <List renderHeader={() => '新增加油记录'}>
          <Field name='applicant' component={() => null} />
          <Field name='fullname' component={() => null} />
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
          <UploadImageField name='shipping' uploadUrl={uploadUrl} />
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
