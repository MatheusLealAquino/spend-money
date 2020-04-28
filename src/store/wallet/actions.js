export function decrement({ commit, state }, payload) {
  const totalValue = Number(state.value) - Number(payload)
  console.log('d', totalValue)
  if(totalValue >= 0) commit('setValue', totalValue)
  if(totalValue < 0)  commit('setValue', 0)
}

export function increment({ commit, state }, payload) {
  const totalValue = Number(state.value) + Number(payload)
  console.log('i', totalValue)
  if (totalValue <= state.totalAmount && totalValue > 0) commit('setValue', totalValue)
  if (totalValue >= state.totalAmount) commit('setValue', state.totalAmount)
}
