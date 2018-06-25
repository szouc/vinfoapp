import * as Request from './request'
import { fromJS } from 'immutable'
import { userNormalize } from '../../../settings/schema'

async function getDriverByUsername(username) {
  const response = await Request.getDriverByUsername(username)
  if (response.data.ok) {
    const data = response.data.result || {}
    // const driver = userNormalize(data)
    return fromJS(data)
  }
  if (!response.data.ok) {
    throw new Error(response.data.error)
  }
  throw new Error('Something Wrong.(getDriverByUsername)')
}

async function changePasswordByUsername({ username, values }) {
  const response = await Request.changePasswordByUsername(username, values)
  if (response.data.ok) {
    const data = response.data.result || {}
    const driver = userNormalize(data)
    return fromJS(driver)
  }
  if (!response.data.ok) {
    throw new Error(response.data.error)
  }
  throw new Error('Something Wrong.(changePasswordByUsername)')
}
export { getDriverByUsername, changePasswordByUsername }
