import React from 'react'
import { Button } from 'antd-mobile'

const LogoutButton = props => {
  return (
    <Button type='warning' onClick={props.logout}>
      用户注销
    </Button>
  )
}

export default LogoutButton
