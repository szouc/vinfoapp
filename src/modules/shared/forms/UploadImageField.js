import React from 'react'

import { ImagePicker } from '../components'
import { Field } from 'redux-form/immutable'

class UploadImageField extends React.PureComponent {
  render() {
    return <Field component={ImagePicker} {...this.props} />
  }
}

export default UploadImageField
