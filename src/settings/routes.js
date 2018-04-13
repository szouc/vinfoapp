/**
 * Auth Module Api Route
 */
export const LOGIN = '/auth/login'
export const LOGOUT = '/auth/logout'
export const RESET_PASSWORD = '/:username/reset_password'

/**
 * Driver Module Api Route
 */
export const DRIVER_ROOT = '/api/driver'
export const DRIVER_ALL = '/api/driver/all'
export const DRIVER_ID = '/api/driver/:username'
export const DRIVER_VEHICLE = '/api/driver/:username/vehicle'
export const DRIVER_FUEL = '/api/driver/:username/fuel'
export const DRIVER_FUEL_ID = '/api/driver/:username/fuel/:childId'
export const DRIVER_MAINTAIN = '/api/driver/:username/maintenance'
export const DRIVER_MAINTAIN_ID = '/api/driver/:username/maintenance/:childId'
export const DRIVER_TRANSPORT = '/api/driver/:username/transport'
export const DRIVER_TRANSPORT_ID = '/api/driver/:username/transport/:childId'
export const DRIVER_TRANSPORT_ID_STATUS = '/api/driver/:username/transport/:childId/status'
