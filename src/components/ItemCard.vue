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
    totalSpent: 0,
    lastMaxQuantity: 0,
    topNumber: false
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
      if (result > 0 && result > this.lastMaxQuantity) this.lastMaxQuantity = result
      return result
    }
  },
  watch: {
    quantity(newVal, oldVal) {
      newVal = Number(newVal)
      oldVal = Number(oldVal)

      if (newVal < 0) {
        this.quantity = 0
      } else if (newVal >= 0) {
        const maxQuantity = this.getMaxQuatity()
        const difference = Math.abs(newVal - oldVal)
        const value = Math.abs(Number(this.price) * difference)

        if ((maxQuantity === 0 || maxQuantity < newVal) && difference > maxQuantity && newVal > oldVal) {
          if (maxQuantity < newVal) {
            this.$store.dispatch('wallet/decrement', Math.abs(Number(this.price) * maxQuantity));
          }
          this.quantity = Number(this.lastMaxQuantity);
        } else if (maxQuantity === 0 || this.lastMaxQuantity >= newVal) {
          if (((newVal && !oldVal) || (newVal > oldVal)) && oldVal >= 0) { // Buy
            this.$store.dispatch('wallet/decrement', value);
          } else if (newVal < oldVal || oldVal < 0) { // Sell
            if (this.lastMaxQuantity !== newVal) this.$store.dispatch('wallet/increment', value);
          }
        }
      }
    }
  }
}
</script>
