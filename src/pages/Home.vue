<template>
  <div class="home">
    <!-- <div class="screen-left"></div> -->
    <screen v-for="item in setScreen" :key="item.id" :base-w="item.width">
      <component :is="item.components" />
    </screen>
  </div>
</template>

<script>
// @ is an alias to /src
import { SCREEN_SET } from '@/utils/screenConfig'
import screen from '@/components/screenWrap'
import leftWrap from '@/views/leftWrap'
import middleWrap from '@/views/middleWrap'
import rightWrap from '@/views/rightWrap'

export default {
  name: 'Home',
  components: {
    screen,
    leftWrap,
    middleWrap,
    rightWrap
  },
  data() {
    return {
      setScreen: SCREEN_SET
    }
  },
  mounted() {
    console.log(SCREEN_SET)
  }
}
</script>
<style lang="less">
.home {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 0.6rem #001731 solid;
}
</style>
