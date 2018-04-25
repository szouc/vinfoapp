import React from 'react'
import {
  BackToActiveButton,
  SubmitForm
} from '../../modules/transport/containers'
import { WhiteSpace } from 'antd-mobile'

class SubmitScreen extends React.PureComponent {
  static navigationOptions = {
    title: '待提交列表',
    headerLeft: <BackToActiveButton />
  }

  render() {
    return (
      <React.Fragment>
        <WhiteSpace size='xl' />
        <SubmitForm />
      </React.Fragment>
    )
  }
}

export default SubmitScreen
