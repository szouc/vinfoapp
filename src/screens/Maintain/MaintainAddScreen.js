import React from 'react'
import { BackButton, MaintainAddForm } from '../../modules/maintain/containers'

class AddScreen extends React.Component {
  static navigationOptions = {
    title: '维修记录',
    headerLeft: <BackButton />
  }

  render() {
    return <MaintainAddForm />
  }
}

export default AddScreen
