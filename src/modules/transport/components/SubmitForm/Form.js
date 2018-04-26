import React from 'react'
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
  const fromErrors = {}
  const toErrors = {}
  if (!values.get('from')) {
    errors.from = '必填'
  } else {
    if (!values.getIn(['from', 'weight'])) {
      fromErrors.weight = '必填'
    }
    if (!values.getIn(['from', 'date'])) {
      fromErrors.date = '必填'
    }
    errors.from = fromErrors
  }
  if (!values.get('to')) {
    errors.to = '必填'
  } else {
    if (!values.getIn(['to', 'weight'])) {
      toErrors.weight = '必填'
    }
    if (!values.getIn(['to', 'date'])) {
      toErrors.date = '必填'
    }
    errors.to = toErrors
  }
  return errors
}

class TransportSubmitForm extends React.PureComponent {
  setTextToInput = value => {
    return value ? value.toString() : null
  }

  render() {
    const { handleSubmit, onSave, onSubmit } = this.props
    return (
      <WingBlank>
        <ActivityIndicator
          toast
          text='提交中...'
          animating={this.props.loading}
        />
        <List renderHeader={() => '添加运输内容'}>
          <FormSection name='from'>
            <FormSection name='company'>
              <InputItemField
                name='name'
                multiline
                editable={false}
                label='出发公司'
              />
            </FormSection>
          </FormSection>
          <FormSection name='from'>
            <InputItemField
              name='weight'
              type='number'
              format={this.setTextToInput}
              placeholder='请输入出发重量'
              label='出发重量'
            />
          </FormSection>
          <FormSection name='from'>
            <InputItemField
              name='date'
              type='number'
              placeholder='请输入出发日期'
              label='出发日期'
            />
          </FormSection>
        </List>
        <List renderHeader={() => '添加运输内容'}>
          <FormSection name='to'>
            <FormSection name='company'>
              <InputItemField
                name='name'
                multiline
                editable={false}
                label='到达公司'
              />
            </FormSection>
          </FormSection>
          <FormSection name='to'>
            <InputItemField
              name='weight'
              type='number'
              format={this.setTextToInput}
              placeholder='请输入到达重量'
              label='到达重量'
            />
          </FormSection>
          <FormSection name='to'>
            <InputItemField
              name='date'
              type='number'
              placeholder='请输入到达日期'
              label='到达日期'
            />
          </FormSection>
        </List>
        <WhiteSpace />
        <Button onClick={onSave}>暂存</Button>
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
