<template>
  <div>
    <NavBar/>
    <RouterView/>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import globalCompanent from './components/globalCompanent';
export default{
  components:{
    ...globalCompanent,
    RouterView
}
}
</script>

<style>

</style>
