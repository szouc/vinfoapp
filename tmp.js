const search = function(data, param) {
  let itera = Object.keys(param)[Symbol.iterator]()
  let result = []
  let filter = function(res) {
    let i = itera.next()
    if (i.done) return
    result = res.filter(val => {
      return val[i.value].toString().includes(param[i.value])
    })
    filter(result)
  }
  filter(data)
  return result
}

export default search
