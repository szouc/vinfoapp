// @flow

const addPrefix = (prefix: String) => (...constant: Array<String>): any => {
  const SEP = '_'
  return [prefix, ...constant].join(SEP)
}

export default addPrefix
