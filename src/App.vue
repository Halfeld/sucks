<template>
  <div id="app">
    <HalfeldMenu label="Sucks list" :items="links">
      <router-view></router-view>
    </HalfeldMenu>
  </div>
</template>

<script>
import { HalfeldMenu } from 'halfeld-components'

export default {
  name: 'Sucks',
  components: { HalfeldMenu },
  data () {
    return {
      links: [
        { name: 'Home', link: '/' },
        { name: 'Murilo sucks', link: '#/murilo' },
        { name: 'Ythalo sucks', link: '#/ythalo' },
        { name: 'Witt sucks', link: '#/witt' }
      ]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
