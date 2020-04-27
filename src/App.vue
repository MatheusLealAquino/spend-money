<template>
  <div id="app">
    <Navbar appName="Spend Money"/>
    <Header
      v-if="headerName"
      :name="headerName"
      :image="headerImage"
    />
    <MoneyCard/>
    <ItemCard
      :image="headerImage"
      name="Big Mac"
      price="1"
    />
  </div>
</template>

<style lang="scss">@import './assets/style.scss';</style>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import MoneyCard from './components/MoneyCard.vue'
import ItemCard from './components/ItemCard.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    MoneyCard,
    ItemCard
  },
  data: () => ({
  }),
  computed: {
    headerName: {
      get () {
        return this.$store.state.wallet.name
      }
    },
    headerImage: {
      get () {
        return this.$store.state.wallet.image
      }
    }
  },
  created () {
    this.$store.commit('wallet/setTotalAmount', 90000000000)
    this.$store.dispatch('wallet/increment', 50)
    this.$store.commit('wallet/setName', `Bill Gates'`)
    this.$store.commit('wallet/setImage', '/static/images/persons/billgates.png')
  }
}
</script>
