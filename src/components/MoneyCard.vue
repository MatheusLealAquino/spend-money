<template>
  <div class="card card__success card__money">
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
  }
}
</script>
