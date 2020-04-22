<template>
  <div class="container">
    <div class="row">
      <Search />
    </div>
    <div class="row">
      <Breadcrumb />
    </div>
    <div class="row">
      <FilterHasil />
      <nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.row{
  margin : 1% 0;
}
</style>
<script>
  import Search from '~/components/Search.vue'
  import Breadcrumb from '~/components/Breadcrumb.vue'
  import FilterHasil from '~/components/FilterHasil.vue'
  export default {
    components: { 
      Search,
      Breadcrumb,
      FilterHasil
    }
  }
</script>