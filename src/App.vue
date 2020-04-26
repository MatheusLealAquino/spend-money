<template>
  <div id="app">
    <Navbar appName="Spend Money"/>
    <Header
      v-if="name"
      :name="name"
      :image="image"
    />
    <MoneyCard/>
  </div>
</template>

<style lang="scss">@import './assets/style.scss';</style>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import MoneyCard from './components/MoneyCard.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    MoneyCard
  },
  data: () => ({
  }),
  computed: {
    name: {
      get () {
        return this.$store.state.wallet.name
      }
    },
    image: {
      get () {
        return this.$store.state.wallet.image
      }
    }
  },
  created () {
    this.$store.commit('wallet/setTotalAmount', 900000)
    this.$store.commit('wallet/setName', `Bill Gates'`)
    this.$store.commit('wallet/setImage', '/static/images/persons/billgates.png')
  }
}
</script>
