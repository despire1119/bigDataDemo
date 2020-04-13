<template>
  <div class="wrap">
    <div class="bgwrap" />
    <div class="tit">
      <div class="tit-inner" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
position: absolute;
   height: 11.25rem;
      .bgwrap {
      position: absolute;
      width: 100%;
      height: 3.56rem;
      background: rgba(24, 70, 95, 0.1);
      border-bottom: 0.08rem #124060 solid;
      z-index: 998;
    }
  .tit {
    display: flex;
    justify-content: center;
    align-items: top;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 11.25rem;
    background-image: url('../../../public/images/bgtitle.png');

    background-repeat: no-repeat;
    background-position: center top;
    background-size: contain;
    z-index: 9999;
    pointer-events: none;

    .tit-inner {
      width: 32.82rem;
      height: 4.33rem;
      margin-top: 1.5rem;
      background-image: url('../../../public/images/main_title.png');
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 999;
    }
  }
}
</style>
