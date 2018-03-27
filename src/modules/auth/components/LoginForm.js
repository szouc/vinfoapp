import { Field, reduxForm } from 'redux-form/immutable'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

import InputText from '../../shared/components/InputText'
import React from 'react'

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

class LoginForm extends React.Component {
  render() {
    const { handleSubmit, onSubmit } = this.props
    return (
      <View style={styles.container}>
        <Field
          name='username'
          component={InputText}
          style={styles.inputBox}
          placeholder='工号'
          underlineColorAndroid='rgba(0,0,0,0)'
        />
        <Field
          name='password'
          component={InputText}
          secureTextEntry
          style={styles.inputBox}
          placeholder='密码'
          underlineColorAndroid='rgba(0,0,0,0)'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>登录</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
})

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm)
