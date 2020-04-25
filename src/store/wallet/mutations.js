export function setValue(state, data) {
  state.value = data ? data : 0
}

export function setTotalAmount(state, data) {
  state.totalAmount = data ? data : null
}

export function setName(state, data) {
  state.name = data ? data : null
}

export function setImage(state, data) {
  state.image = data ? data : null
}
