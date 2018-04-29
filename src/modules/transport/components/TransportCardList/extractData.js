import R from 'ramda'
import moment from 'moment'

const statusTranslate = {
  '': '',
  assign: '未接单',
  accept: '已接单',
  submit: '已提交',
  pass: '通过审核',
  deny: '被拒绝'
}

const extractDataFromProps = props => {
  const num = R.compose(R.propOr('', 'num'), R.propOr({}, 'transport'))(props)
  const assigner = R.compose(
    R.propOr('', 'fullname'),
    R.propOr({}, 'assigner'),
    R.propOr({}, 'transport')
  )(props)
  const vehicle = R.compose(
    R.propOr('', 'plate'),
    R.propOr({}, 'vehicle'),
    R.propOr({}, 'transport')
  )(props)
  const principal = R.compose(
    R.propOr('', 'fullname'),
    R.propOr({}, 'principal'),
    R.propOr({}, 'transport')
  )(props)
  const secondary = R.compose(
    R.propOr('', 'fullname'),
    R.propOr({}, 'principal'),
    R.propOr({}, 'transport')
  )(props)
  const fromCompany = R.compose(
    R.join(' —— '),
    R.props(['name', 'addr']),
    R.propOr({}, 'company'),
    R.propOr({}, 'from'),
    R.propOr({}, 'transport')
  )(props)
  const fromWeight = R.compose(
    R.propOr(null, 'weight'),
    R.propOr({}, 'from'),
    R.propOr({}, 'transport')
  )(props)
  const fromDate = R.compose(
    moment,
    R.propOr('', 'date'),
    R.propOr({}, 'from'),
    R.propOr({}, 'transport')
  )(props)
  const toCompany = R.compose(
    R.join(' —— '),
    R.props(['name', 'addr']),
    R.propOr({}, 'company'),
    R.propOr({}, 'to'),
    R.propOr({}, 'transport')
  )(props)
  const toWeight = R.compose(
    R.propOr(null, 'weight'),
    R.propOr({}, 'to'),
    R.propOr({}, 'transport')
  )(props)
  const toDate = R.compose(
    moment,
    R.propOr('', 'date'),
    R.propOr({}, 'to'),
    R.propOr({}, 'transport')
  )(props)
  const product = R.compose(
    R.join(' —— '),
    R.props(['name', 'specs']),
    R.propOr({}, 'product'),
    R.propOr({}, 'transport')
  )(props)
  const created = R.compose(
    moment,
    R.propOr('', 'created'),
    R.propOr({}, 'transport')
  )(props)
  const status = R.compose(
    R.propOr('', 'captain_status'),
    R.propOr({}, 'transport')
  )(props)
  // const info = R.compose(R.propOr('', 'info'), R.propOr({}, 'fuel'))(
  //   props
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
