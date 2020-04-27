export function decrement({ commit, state }, payload) {
  if (payload <= state.value) {
    const totalValue = Number(state.value) - Number(payload)
    if(totalValue >= 0) commit('setValue', totalValue)
  }
}

export function increment({ commit, state }, payload) {
  const totalValue = Number(state.value) + Number(payload)
  if (totalValue <= state.totalAmount && totalValue > 0) commit('setValue', totalValue)
  if (totalValue >= state.totalAmount) commit('setValue', state.totalAmount)
}
