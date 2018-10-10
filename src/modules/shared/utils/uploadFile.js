import RNFetchBlob from 'rn-fetch-blob'

export const uploadFile = (uploadUrl, filename, PATH_TO_THE_FILE) =>
  RNFetchBlob.fetch(
    'POST',
    uploadUrl,
    { 'Content-Type': 'multipart/form-data' },
    [
      {
        name: 'shipping',
        filename,
        data: RNFetchBlob.wrap(PATH_TO_THE_FILE)
      }
    ]
  )
