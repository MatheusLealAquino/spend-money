<template>
  <div id="app">
    <Navbar appName="Spend Money"/>
    <Header 
      :title="header.title"
      :image="header.image"
    />
  </div>
</template>

<style lang="scss">@import './assets/style.scss';</style>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header
  },
  data: () => ({
    header: {
      title: '',
      image: ''
    }
  }),
  created () {
    this.header.title = `Spend Bill Gates' Money`
    this.header.image = '/static/images/persons/billgates.png'
  }
}
</script>
