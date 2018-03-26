import { AsyncStorage } from 'react-native'

const getLocalLoggedIn = () => AsyncStorage.getItem('vinfo/loggedIn')
const getLocalUser = () => AsyncStorage.getItem('vinfo/user')
const setLocalLoggedIn = async username => {
  await Promise.all([
    AsyncStorage.setItem('vinfo/loggedIn', JSON.stringify(true)),
    AsyncStorage.setItem('vinfo/user', JSON.stringify(username))
  ])
}
const removeLocalLoggedIn = async () => {
  await Promise.all([
    AsyncStorage.removeItem('vinfo/loggedIn'),
    AsyncStorage.removeItem('vinfo/user')
  ])
}

export { getLocalLoggedIn, getLocalUser, setLocalLoggedIn, removeLocalLoggedIn }
