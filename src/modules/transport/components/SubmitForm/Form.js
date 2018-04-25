import React from 'react'
import { View } from 'react-native'
import { InputItemField } from '../../../shared'
import { reduxForm } from 'redux-form/immutable'
import { FormSection } from 'redux-form'
import {
  List,
  WingBlank,
  WhiteSpace,
  Button,
  ActivityIndicator
} from 'antd-mobile'

const validate = values => {
  const errors = {}
  if (!values.get('from.weight')) {
    errors['from.weight'] = '必填'
  }
  if (!values.get('from.date')) {
    errors['from.date'] = '必填'
  }
  if (!values.get('to.weight')) {
    errors['to.weight'] = '必填'
  }
  if (!values.get('to.date')) {
    errors['to.date'] = '必填'
  }
  return errors
}

class TransportSubmitForm extends React.PureComponent {
  render() {
    const { handleSubmit, onSubmit } = this.props
    return (
      <WingBlank>
        <ActivityIndicator
          toast
          text='提交中...'
          animating={this.props.loading}
        />
        <List renderHeader={() => '添加运输内容'}>
          <FormSection name='from' component='View'>
            <InputItemField
              name='weight'
              type='number'
              placeholder='请输入出发重量'
              label='出发重量'
            />
            <InputItemField
              name='date'
              type='number'
              placeholder='请输入出发日期'
              label='出发日期'
            />
          </FormSection>
          <FormSection name='to' component='View'>
            <InputItemField
              name='weight'
              type='number'
              placeholder='请输入到达重量'
              label='到达重量'
            />
            <InputItemField
              name='date'
              type='number'
              placeholder='请输入到达日期'
              label='到达日期'
            />
          </FormSection>
        </List>
        <WhiteSpace />
        <Button onClick={handleSubmit(onSubmit)}>提交</Button>
      </WingBlank>
    )
  }
}

export default reduxForm({
  form: 'TransportSubmitForm',
  validate
})(TransportSubmitForm)
