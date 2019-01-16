<template lang="pug">
  div#homepage-wrapper
    li.active-box
      div.tab-content(@click="toggle(index)" v-for="(tab,index) in tabs" :key="index")
        span.tab-text(:class="{'active':active === index}") {{tab.type}}
    attractions-box(v-if="active === 0")
    traffic-box(v-if="active === 1")
    other-box(v-if="active === 2")
</template>

<script src="./control.js"></script>

<style scoped lang="stylus" src="./style.styl"></style>
