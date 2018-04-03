import React, { Component } from 'react'
import { InputItem } from '../../../shared'
import { Field, reduxForm } from 'redux-form/immutable'
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

class AddFuelForm extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props
    return (
      <WingBlank>
        <List renderHeader={() => '新增加油记录'}>
          <Field
            name='litre'
            type='number'
            component={InputItem}
            placeholder='请输入加油升数'
          >
            升数
          </Field>
          <Field
            name='cost'
            type='number'
            component={InputItem}
            extra='¥'
            placeholder='请输入加油开销'
          >
            费用
          </Field>
          <Field
            name='mile'
            type='number'
            component={InputItem}
            placeholder='请输入当前里程'
          >
            里程
          </Field>
        </List>
        <WhiteSpace />
        <Button onClick={handleSubmit(onSubmit)}>提交</Button>
      </WingBlank>
    )
  }
}

export default reduxForm({
  form: 'loginForm',
  validate
})(AddFuelForm)
