import React from 'react'
import {
  InputItemField,
  DatePickerField,
  UploadImageField
} from '../../../shared'
import { reduxForm } from 'redux-form/immutable'
import {
  List,
  WingBlank,
  WhiteSpace,
  Button,
  ActivityIndicator
} from 'antd-mobile'
import { ScrollView } from 'react-native'

const validate = values => {
  const errors = {}
  const checkKeys = [
    'fromName',
    'toName',
    'fromWeight',
    'fromDate',
    'toWeight',
    'toDate'
  ]
  checkKeys.map(key => {
    if (!values.get(key)) {
      errors[key] = '必填'
    }
  })
  return errors
}

class TransportSubmitForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onUserSave = props.onSave({
      username: props.username,
      transportId: props.transportId
    })
    this.onUserSubmit = props.onSubmit({
      username: props.username,
      transportId: props.transportId
    })
  }

  setTextToInput = value => {
    return value ? value.toString() : null
  }

  render() {
    const { handleSubmit, saveValues, uploadUrl } = this.props
    return (
      <ScrollView>
        <WingBlank>
          <ActivityIndicator
            toast
            text='提交中...'
            animating={this.props.loading}
          />
          <List renderHeader={() => '添加运输内容'}>
            <InputItemField
              name='fromName'
              multiline
              editable={false}
              label='出发公司'
            />
            <InputItemField
              name='fromWeight'
              type='number'
              format={this.setTextToInput}
              placeholder='请输入出发重量'
              label='出发重量'
            />
            <DatePickerField
              name='fromDate'
              label='出发日期'
              title='出发日期'
              extra='请选择出发日期'
            />
          </List>
          <List renderHeader={() => '添加运输内容'}>
            <InputItemField
              name='toName'
              multiline
              editable={false}
              label='到达公司'
            />
            <InputItemField
              name='toWeight'
              type='number'
              format={this.setTextToInput}
              placeholder='请输入到达重量'
              label='到达重量'
            />
            <DatePickerField
              name='toDate'
              label='到达日期'
              title='到达日期'
              extra='请选择到达日期'
            />
          </List>
          <List renderHeader={() => '添加运输照片'}>
            <UploadImageField name='shippingPic' uploadUrl={uploadUrl} />
          </List>
          <WhiteSpace />
          <Button onClick={this.onUserSave(saveValues)}>暂存</Button>
          <WhiteSpace />
          <Button onClick={handleSubmit(this.onUserSubmit)}>提交</Button>
          <WhiteSpace />
        </WingBlank>
      </ScrollView>
    )
  }
}

export default reduxForm({
  form: 'TransportSubmitForm',
  validate
})(TransportSubmitForm)
