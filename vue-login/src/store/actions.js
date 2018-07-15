import * as types from './mutation-types'
import api from '@/api'

export default {
  // 原理上 actions 与 mutations 对应相等 actions commit => mutations
  UserLogin ({ commit }, data) {
    commit(types.LOGIN, data)
  },
  UserLogout ({ commit }) {
    commit(types.LOGOUT)
  },
  UserName ({ commit }, data) {
    commit(types.USERNAME, data)
  }
}