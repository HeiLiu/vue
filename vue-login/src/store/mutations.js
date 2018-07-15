import * as types from './mutation-types'

export default {
  [types.LOGIN]: (state, data) => {
    localStorage.setItem('token', data)
    state.token = data
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token')
    state.tokekn = ''
  },
  [types.USERNAME]: (state, data) => {
    localStorage.setItem('username', data);
    state.userName = data
  }
}