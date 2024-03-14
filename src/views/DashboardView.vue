<template>
<div class=dashboard-form>
<div class="dashboard-header">
  <DashboardHeader/>
</div> 
<div class="columns middle-view">
  <div class="column is-three-fifths">
    <p>Welcome back</p>
    <p>Charith</p>
    <p>calender</p>
  </div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>
</div>
<div class="bottom-view">
  <div class="column is-three-fifths">is-three-fifths</div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>  
</div>
</div>
</template>

<script>
import DashboardHeader from '../components/DashboardHeader.vue'
export default {
    components:{
        DashboardHeader, 
    }

}
</script>

<style>

</style>