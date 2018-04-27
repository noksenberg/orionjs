import fieldType from '../fieldType'
import isString from 'lodash/isString'
import Errors from '../Errors'

export default fieldType({
  name: 'string',
  validate(value) {
    if (!isString(value)) return Errors.NOT_A_STRING
  }
})
