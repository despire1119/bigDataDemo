<template>
  <!-- <div class="left" @click="reload"> -->
  <div class="left" >3453445</div>
</template>

<script>
export default {
  inject: ['reload'],
  created() {
    console.log('刷新了')
  }
}
</script>

<style lang="less" scoped>
.left {
  width: 100%;
  height: 100%;
  background-image: url("../../public/images/dav_01.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  font-size: 2rem;
text-align:  center;
color: #ffffff;

  
}
</style>
