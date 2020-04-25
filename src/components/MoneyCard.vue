<template>
  <div class="card card__success">
    <h1>${{value}} left</h1>
  </div>
</template>

<script>
export default {
  name: 'MoneyCard',
  data: () => ({
  }),
  computed: {
    value: {
      get () {
        return this.$store.state.wallet.value
      }
    }
  },
  created () {
    this.$store.dispatch('wallet/increment', 50)
  }
}
</script>
