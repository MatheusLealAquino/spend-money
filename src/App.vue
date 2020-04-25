<template>
  <div id="app">
    <Navbar appName="Spend Money"/>
    <Header 
      :name="header.name"
      :image="header.image"
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
    header: {
      name: '',
      image: ''
    }
  }),
  created () {
    this.$store.commit('wallet/setTotalAmount', 900000)
    this.header.name = `Bill Gates'`
    this.header.image = '/static/images/persons/billgates.png'
  }
}
</script>
