import React from 'react'
import { InputItemField } from '../../../shared'
import { reduxForm } from 'redux-form/immutable'
import {
  List,
  WingBlank,
  WhiteSpace,
  Button,
  ActivityIndicator
} from 'antd-mobile'

const validate = values => {
  const errors = {}
  const checkKeys = ['password', 'confirm']
  checkKeys.map(key => {
    if (!values.get(key)) {
      errors[key] = '必填'
    }
  })
  if (values.get('password') !== values.get('confirm')) {
    errors['password'] = '必填'
    errors['confirm'] = '必填'
  }
  return errors
}

class ChangePasswordForm extends React.PureComponent {
  render() {
    const { handleSubmit, onSubmit } = this.props
    return (
      <WingBlank>
        <ActivityIndicator
          toast
          text='提交中...'
          animating={this.props.loading}
        />
        <List renderHeader={() => '修改用户密码'}>
          <InputItemField
            name='password'
            type='password'
            placeholder='请输入新的密码'
            label='设置密码'
          />
          <InputItemField
            name='confirm'
            type='password'
            placeholder='请再次输入新密码'
            label='再次输入'
          />
        </List>
        <WhiteSpace />
        <Button onClick={handleSubmit(onSubmit)}>提交</Button>
      </WingBlank>
    )
  }
}

export default reduxForm({
  form: 'ChangePasswordForm',
  validate
})(ChangePasswordForm)
