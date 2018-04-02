import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { InputItem } from '../../../shared'
import { Field, reduxForm } from 'redux-form/immutable'

const validate = values => {
  const errors = {}
  if (!values.get('username')) {
    errors.username = '必填'
  }
  if (!values.get('password')) {
    errors.password = '必填'
  }
  return errors
}

class AddFuelForm extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props
    return (
      <View>
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Text>提交</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default reduxForm({
  form: 'loginForm',
  validate
})(AddFuelForm)
