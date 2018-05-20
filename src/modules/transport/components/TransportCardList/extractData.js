import {compose, props, propOr, join} from 'ramda'
import moment from 'moment'

const statusTranslate = {
  '': '',
  assign: '未接单',
  accept: '已接单',
  submit: '已提交',
  pass: '通过审核',
  deny: '被拒绝'
}

const extractDataFromProps = value => {
  const num = compose(propOr('', 'num'), propOr({}, 'transport'))(value)
  const assigner = compose(
    propOr('', 'assignerName'),
    propOr({}, 'transport')
  )(value)
  const vehicle = compose(
    propOr('', 'plate'),
    propOr({}, 'transport')
  )(value)
  const principal = compose(
    propOr('', 'principalName'),
    propOr({}, 'transport')
  )(value)
  const secondary = compose(
    propOr('', 'secondaryName'),
    propOr({}, 'transport')
  )(value)
  const fromCompany = compose(
    join(' —— '),
    props(['fromName', 'fromAddr']),
    propOr({}, 'transport')
  )(value)
  const fromWeight = compose(
    propOr(null, 'fromWeight'),
    propOr({}, 'transport')
  )(value)
  const fromDate = compose(
    moment,
    propOr('', 'fromDate'),
    propOr({}, 'transport')
  )(value)
  const toCompany = compose(
    join(' —— '),
    props(['toName', 'toAddr']),
    propOr({}, 'transport')
  )(value)
  const toWeight = compose(
    propOr(null, 'toWeight'),
    propOr({}, 'transport')
  )(value)
  const toDate = compose(
    moment,
    propOr('', 'toDate'),
    propOr({}, 'transport')
  )(value)
  const product = compose(
    join(' —— '),
    props(['productName', 'productSpecs']),
    propOr({}, 'transport')
  )(value)
  const created = compose(
    moment,
    propOr('', 'createdAt'),
    propOr({}, 'transport')
  )(value)
  const status = compose(
    propOr('', 'captainStatus'),
    propOr({}, 'transport')
  )(value)
  // const info = compose(propOr('', 'info'), propOr({}, 'fuel'))(
  //   value
  // )

  const orderProps = {
    num,
    assigner,
    vehicle,
    principal,
    secondary,
    fromCompany,
    toCompany,
    product,
    created: created.isValid() ? created.format('LL') : '',
    currentStatus: statusTranslate[status]
  }

  const inputProps = {
    fromWeight,
    fromDate: fromDate.isValid() ? fromDate.format('LLL') : '',
    toWeight,
    toDate: toDate.isValid() ? toDate.format('LLL') : ''
  }

  return { orderProps, inputProps }
}

export default extractDataFromProps
