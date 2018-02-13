<template>
  <main class="main">
    <Header />
    <Content />
    <Footer />
  </main>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style lang="sass" >
@import './assets/sass/main'
@import url('https://fonts.googleapis.com/css?family=Lobster&subset=cyrillic,cyrillic-ext')
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&subset=cyrillic,cyrillic-ext')
body
  font-family: 'Open Sans', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background:
    image: url('./assets/body-fon.jpg')
    position: top center
    repeat: no-repeat
    color: #dedad6
.container
  +container-fluid
</style>
