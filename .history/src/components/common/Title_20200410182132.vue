<template>
  <div class="tit" />
</template>

<script>
export default {
  name: 'Title'

}
</script>

<style lang="less" scoped>
.tit{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 11.22rem;
  background: url('../../../public/images/bgtitle.png') no-repeat center center  /contain;
  //background-size: 100% 100%;
  z-index: 9999;
}
</style>
