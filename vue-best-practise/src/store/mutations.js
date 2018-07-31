import * as types from './mutations-types'

export default {
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + Number(time)
  },
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - Number(time)
  },
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值， 未来我们可以直接读取呢称和头像  
    const avatar = 'https://avatars2.githubusercontent.com/u/3757267?s=460&v=4'
    state.list.push(
      Object.assign({name: '青衣诶', avatar: avatar}, plan)
    )
  },
  [types.DELETE_PLAN] (state, index) {
    state.list.splice(index, 1)
  }
}
