<template>
  <div class="weather">
    <ol>shsdhfhsdfhsdfhsdhf</ol>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.weather {
  width: 19rem;
  height: 3.56rem;
  //  background: rgba(24, 70, 95, 0.3);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 998;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  //border-bottom: 0.08rem #124060 solid;
  ol {
    cursor: pointer;
    font: 2rem/3.56rem "微软雅黑";
    color: #ffffff;
   
  //  background: url('../images/weather.png') no-repeat center center;
    background-size: 35%;
  }
}
</style>
