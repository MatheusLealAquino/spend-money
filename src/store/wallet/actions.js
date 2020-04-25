export function reduce({ commit, state }, payload) {
  const totalValue = state.value - payload
  if(totalValue >= 0) commit('setValue', totalValue)
}

export function increment({ commit, state }, payload) {
  const totalValue = state.value + payload
  if (totalValue <= state.totalAmount) commit('setValue', totalValue)
}
