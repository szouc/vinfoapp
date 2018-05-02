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
    propOr('', 'fullname'),
    propOr({}, 'assigner'),
    propOr({}, 'transport')
  )(value)
  const vehicle = compose(
    propOr('', 'plate'),
    propOr({}, 'vehicle'),
    propOr({}, 'transport')
  )(value)
  const principal = compose(
    propOr('', 'fullname'),
    propOr({}, 'principal'),
    propOr({}, 'transport')
  )(value)
  const secondary = compose(
    propOr('', 'fullname'),
    propOr({}, 'principal'),
    propOr({}, 'transport')
  )(value)
  const fromCompany = compose(
    join(' —— '),
    props(['name', 'addr']),
    propOr({}, 'company'),
    propOr({}, 'from'),
    propOr({}, 'transport')
  )(value)
  const fromWeight = compose(
    propOr(null, 'weight'),
    propOr({}, 'from'),
    propOr({}, 'transport')
  )(value)
  const fromDate = compose(
    moment,
    propOr('', 'date'),
    propOr({}, 'from'),
    propOr({}, 'transport')
  )(value)
  const toCompany = compose(
    join(' —— '),
    props(['name', 'addr']),
    propOr({}, 'company'),
    propOr({}, 'to'),
    propOr({}, 'transport')
  )(value)
  const toWeight = compose(
    propOr(null, 'weight'),
    propOr({}, 'to'),
    propOr({}, 'transport')
  )(value)
  const toDate = compose(
    moment,
    propOr('', 'date'),
    propOr({}, 'to'),
    propOr({}, 'transport')
  )(value)
  const product = compose(
    join(' —— '),
    props(['name', 'specs']),
    propOr({}, 'product'),
    propOr({}, 'transport')
  )(value)
  const created = compose(
    moment,
    propOr('', 'created'),
    propOr({}, 'transport')
  )(value)
  const status = compose(
    propOr('', 'captain_status'),
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
