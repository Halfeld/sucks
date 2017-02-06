<template lang="html">
  <div class="wrapper">
    <img ref="face" class="wrapper-face" src="src/assets/witt.png" alt="Witt sucks">
    <img ref="piroca" class="wrapper-piroca" src="src/assets/piroca.png" alt="Piroca">
  </div>
</template>

<script>
export default {
  name: 'Witt',
  mounted () {
    const self = this
    const audio = new Audio('src/assets/audio.mp3')

    window.addEventListener('deviceorientation', function (evt) {
      self.$refs.piroca.style.left = `${(evt.gamma.toFixed(2) * 2)}px`

      if ((evt.gamma.toFixed(2) * 2) >= 150) {
        audio.play()
        navigator.vibrate(500)
      }
    })
  }
}
</script>

<style lang="sass">


.wrapper
  margin: 0 auto
  width: 30vw

  > .wrapper-face
    width: 100%
    height: auto

  > .wrapper-piroca
    position: absolute
    width: 30vw
    left: 30px
    top: 50vw
    margin-top: -7vw
</style>
