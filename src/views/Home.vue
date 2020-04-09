<template>
  <div class="home">
    <!-- <div class="screen-left"></div> -->
    <screen v-for="item in setScreen" :key="item.id" :baseW="item.width">
      <component :is="item.components"></component>
    </screen>
  </div>
</template>

<script>
// @ is an alias to /src
import { SCREEN_SET } from "@/utils/screenConfig";
import screen from "@/components/screenWrap";
import leftWrap from "@/views/leftWrap";
import middleWrap from "@/views/middleWrap";
import rightWrap from "@/views/rightWrap";

export default {
  name: "Home",
  data() {
    return {
      setScreen: SCREEN_SET
    };
  },
  mounted() {
    console.log(SCREEN_SET)
  },
  components: {
    screen,
    leftWrap,
    middleWrap,
    rightWrap
  }
};
</script>
<style lang="less">
.home {
  // width: 100%;
  height: 100%;
}
</style>
