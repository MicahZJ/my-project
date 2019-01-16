<template lang="pug">
  div#wrap
    ul
      li.tab-list(@click="toggle(index)" v-for="(tab,index) in tabs" :key="index" :class="{active:active===index}") {{tab.type}}
    div(v-show="active === 0")
    div(v-show="active === 1")
</template>

<script src="./control.js"></script>

<style scoped lang="stylus" src="./style.styl"></style>
