import moment from 'moment'
import { fromJS } from 'immutable'

const date1 = '2018-04-11'
const date2 = '2018-04-10'
const date3 = '2018-04-09'

const i1 = fromJS([date1, date3, date2])

const b1 = moment(date1).isBefore(date2)
const b2 = moment(date3).isSame('2018-04-09')
const s1 = i1.sort((a, b) => {
  if (moment(a).isBefore(b)) {
    return 1
  }
  if (moment(a).isAfter(b)) {
    return -1
  }
  if (moment(a).isSame(b)) {
    return 0
  }
})

console.log(b1, b2)
console.log(s1.toJS())
