import RNFetchBlob from 'rn-fetch-blob'

export const uploadFile = (name, uploadUrl, filename, PATH_TO_THE_FILE) =>
  RNFetchBlob.fetch(
    'POST',
    uploadUrl,
    { 'Content-Type': 'multipart/form-data' },
    [
      {
        name,
        filename,
        data: RNFetchBlob.wrap(PATH_TO_THE_FILE)
      }
    ]
  )
