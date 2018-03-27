import { schema, normalize } from 'normalizr'

export const COMPANY_STATE_KEY = 'companies'
export const USER_STATE_KEY = 'users'
export const PRODUCT_STATE_KEY = 'products'
export const FUEL_STATE_KEY = 'fuels'
export const MAINTAIN_STATE_KEY = 'maintenance'
export const PRICE_HISTORY_STATE_KEY = 'price_histories'
export const VEHICLE_STATE_KEY = 'vehicles'
export const TRANSPORT_STATE_KEY = 'transports'

export const userSchema = new schema.Entity(
  USER_STATE_KEY,
  {},
  { idAttribute: 'username' }
)

export const fuelSchema = new schema.Entity(
  FUEL_STATE_KEY,
  {
    applicant: userSchema
  },
  { idAttribute: '_id' }
)

export const maintainSchema = new schema.Entity(
  MAINTAIN_STATE_KEY,
  {
    applicant: userSchema
  },
  { idAttribute: '_id' }
)

export const vehicleSchema = new schema.Entity(
  VEHICLE_STATE_KEY,
  {
    captain: userSchema,
    principal: userSchema,
    secondary: userSchema,
    fuels: [fuelSchema],
    maintenance: [maintainSchema]
  },
  { idAttribute: '_id' }
)

export const companySchema = new schema.Entity(
  COMPANY_STATE_KEY,
  {},
  { idAttribute: '_id' }
)

export const priceHistorySchema = new schema.Entity(
  PRICE_HISTORY_STATE_KEY,
  {},
  { idAttribute: '_id' }
)

export const productSchema = new schema.Entity(
  PRODUCT_STATE_KEY,
  {
    price_history: [priceHistorySchema]
  },
  { idAttribute: '_id' }
)

export const transportSchema = new schema.Entity(
  TRANSPORT_STATE_KEY,
  {
    assigner: userSchema,
    vehicle: vehicleSchema,
    principal: userSchema,
    secondary: userSchema,
    from: {
      company: companySchema
    },
    to: {
      company: companySchema
    },
    product: productSchema,
    accountant: userSchema
  },
  { idAttribute: '_id' }
)

const userNormalize = data => normalize(data, userSchema)
const userArrayNormalize = data => normalize(data, [userSchema])
const companyNormalize = data => normalize(data, companySchema)
const companyArrayNormalize = data => normalize(data, [companySchema])
const productNormalize = data => normalize(data, productSchema)
const productArrayNormalize = data => normalize(data, [productSchema])
const vehicleNormalize = data => normalize(data, vehicleSchema)
const vehicleArrayNormalize = data => normalize(data, [vehicleSchema])
const transportNormalize = data => normalize(data, transportSchema)
const transportArrayNormalize = data => normalize(data, [transportSchema])

export {
  userNormalize,
  userArrayNormalize,
  companyNormalize,
  companyArrayNormalize,
  productNormalize,
  productArrayNormalize,
  vehicleNormalize,
  vehicleArrayNormalize,
  transportNormalize,
  transportArrayNormalize
}
