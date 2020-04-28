<template>
  <div class="card card__item">
    <img :alt="name" :src="image" v-if="image">
    <h2>{{name}}</h2>
    <h3>${{price}}</h3>

    <div class="card__footer">
      <button class="button button__danger" @click="sell">Sell</button>
      <input v-model="quantity" class="input" min="0" type="number"/>
      <button class="button button__success" @click="buy">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    image: String,
    name: String,
    price: String
  },
  data: () => ({
    quantity: 0,
    lastMaxQuantity: 0
  }),
  computed: {
    moneyValue: {
      get () {
        return this.$store.state.wallet.value
      }
    }
  },
  methods: {
    buy () {
      this.quantity++;
    },
    sell () {
      if(this.quantity > 0) this.quantity--;
    },
    getMaxQuatity() {
      const result = Math.floor(Number(this.moneyValue)/Number(this.price))
      if (result > 0) this.lastMaxQuantity = result
      return result
    }
  },
  watch: {
    quantity(newVal, oldVal) {
      newVal = Number(newVal)
      oldVal = Number(oldVal)

      const maxQuantity = this.getMaxQuatity()
      const difference = Math.abs(newVal - oldVal)
      const value = Math.abs(Number(this.price) * difference)
      let lastMaxQuantity = Number(this.lastMaxQuantity)

      if (newVal > oldVal && maxQuantity != 0) { // Buy
        this.$store.dispatch('wallet/decrement', value)
      } else if ((newVal < oldVal && this.moneyValue !== 0) || this.moneyValue === 0) { // Sell
        this.$store.dispatch('wallet/increment', value)
      } else if (lastMaxQuantity > 0 && maxQuantity === 0 && this.moneyValue === 0) {
        this.$store.dispatch('wallet/decrement', Number(this.price) * oldVal)        
        this.quantity = lastMaxQuantity
      }
      this.getMaxQuatity()
    }
  }
}
</script>
