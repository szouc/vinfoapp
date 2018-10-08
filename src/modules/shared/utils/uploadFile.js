import RNFetchBlob from 'rn-fetch-blob'
import { WEB_ADDR } from '../../../settings/configs'

export const uploadFile = PATH_TO_THE_FILE =>
  RNFetchBlob.fetch('POST', WEB_ADDR, RNFetchBlob.wrap(PATH_TO_THE_FILE))
    .then(res => {
      console.tron.log(res.text())
    })
    .catch(err => {
      // error handling ..
      console.tron.log(err)
    })
