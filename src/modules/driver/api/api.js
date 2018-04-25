import * as Request from './request'
import { fromJS } from 'immutable'
import { userNormalize } from '../../../settings/schema'

const STATUS_OK = 200

async function getDriverByUsername (username) {
  const response = await Request.getDriverByUsername(username)
  if (response.status === STATUS_OK) {
    const data = response.data.result || {}
    // const driver = userNormalize(data)
    return fromJS(data)
  }
  throw new Error('Something Wrong.(getDriverByUsername)')
}

async function changePasswordByUsername (values) {
  const username = values.get('username')
  const password = values.get('password')
  const response = await Request.changePasswordByUsername(username, password)
  if (response.status === STATUS_OK) {
    const data = response.data.result || {}
    const driver = userNormalize(data)
    return fromJS(driver)
  }
  throw new Error('Something Wrong.(changePasswordByUsername)')
}
export {
  getDriverByUsername,
  changePasswordByUsername
}
