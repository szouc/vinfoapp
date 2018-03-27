import { StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

class InputText extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { input: { onChange, ...inputRest }, meta, ref, ...rest } = this.props
    return (
      <View>
        <TextInput
          onChangeText={onChange}
          {...inputRest}
          {...rest}
        />
        {meta.touched &&
          meta.error && <Text style={styles.errorText}>{meta.error}</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  errorText: {
    color: '#900',
    fontSize: 9
  }
})

export default InputText
