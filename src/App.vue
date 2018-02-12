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
@import url('https://fonts.googleapis.com/css?family=Lobster&subset=cyrillic,cyrillic-ext')
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&subset=cyrillic,cyrillic-ext')
body
  margin: 0
  padding: 0
  font-family: 'Open Sans', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  height: 100%
  background:
    image: url('./assets/body-fon.jpg')
    position: top center
    repeat: no-repeat
    color: #dedad6

img
  width: 100%
  height: auto

.container
  width: 970px
  margin: 0 auto

</style>
